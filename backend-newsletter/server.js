import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

// Enable CORS so your frontend can communicate with this backend
app.use(cors());

// Initialize Resend with your API key
// For this to work in production, set RESEND_API_KEY in your hosting provider (like Render/Vercel)
const resend = new Resend(process.env.RESEND_API_KEY);

// You must change this to the email address you verified on Resend (e.g., hello@climatewarden.org)
const FROM_EMAIL = 'onboarding@resend.dev';

app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        // 1. Add the email to your Resend Audience (Newsletter list)
        // To do this, you first need to create an Audience in the Resend dashboard and get its ID
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (audienceId) {
            await resend.contacts.create({
                email: email,
                unsubscribed: false,
                audienceId: audienceId,
            });
        }

        // 2. Send the instant Welcome/Confirmation Email
        const response = await resend.emails.send({
            from: FROM_EMAIL,
            to: email, // Sending TO the user who just subscribed
            subject: 'Welcome to Climate Warden! 🌍',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #166534;">Thank you for joining Climate Warden!</h2>
            <p>You've successfully subscribed to our newsletter.</p>
            <p>We're thrilled to have you in our community. You'll now receive our latest updates, campaigns, and climate stories directly from Bauchi State.</p>
            <br>
            <p>Best regards,<br><strong>The Climate Warden Team</strong></p>
        </div>
      `,
        });

        if (response.error) {
            return res.status(400).json({ success: false, error: response.error.message });
        }

        res.status(200).json({ success: true, message: 'Successfully subscribed' });

    } catch (err) {
        console.error('Subscription error:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Newsletter backend listening on port ${PORT}`);
});
