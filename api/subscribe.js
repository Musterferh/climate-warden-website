import { Resend } from 'resend';

// Vercel Serverless Function for Newsletter Subscription
export default async function handler(req, res) {
    // Only allow POST requests (form submissions)
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    // Get the submitted email address
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        // 1. Initialize Resend
        // Vercel securely injects your process.env.RESEND_API_KEY behind the scenes
        const resend = new Resend(process.env.RESEND_API_KEY);

        // YOU MUST CHANGE THIS to the verified email domain in your Resend Dashboard 
        // Example: 'onboarding@climatewarden.org'
        const FROM_EMAIL = 'hello@climatewarden.org';

        // 2. Add Subscriber to Audience List (Optional, requires Audience ID)
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (audienceId) {
            await resend.contacts.create({
                email: email,
                unsubscribed: false,
                audienceId: audienceId,
            });
        }

        // 3. Send the Instant Welcome/Confirmation Email
        const response = await resend.emails.send({
            from: FROM_EMAIL,
            to: email, // Sending to the subscriber
            subject: 'Welcome to Climate Warden! 🌍',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #16a34a; margin-bottom: 20px;">Welcome to the Movement!</h2>
            <p>Hi there,</p>
            <p>Thank you for subscribing to the Climate Warden newsletter. You have successfully joined our community.</p>
            <p>We are a youth-led initiative building the next generation of environmental leaders across Northern Nigeria. You will now receive our latest updates, campaigns, and climate stories directly to your inbox.</p>
            <br>
            <p>Best regards,<br><strong>The Climate Warden Team</strong></p>
        </div>
      `,
        });

        if (response.error) {
            console.error("Resend API Error:", response.error);
            return res.status(400).json({ success: false, error: response.error.message });
        }

        // Success response
        return res.status(200).json({ success: true, message: 'Successfully subscribed' });

    } catch (err) {
        console.error('Subscription error:', err);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}
