# Climate Warden Newsletter Subscription API (Vercel)

This folder (`/api`) contains the Vercel Serverless Function that securely handles your newsletter subscriptions using Resend API. 

Because you are hosting on Vercel, this setup is completely automatic. You don't need a separate backend!

## Setup Instructions

### 1. Configure Resend
1. Log in to your [Resend dashboard](https://resend.com/).
2. Create an **API Key**.
3. Go to **Audiences**, create an audience for your newsletter, and copy its `Audience ID`.
4. Make sure your domain (`climatewarden.org` or similar) is verified in the Resend Domains tab.

### 2. Update the Code
Open `api/subscribe.js` and edit **Line 19**:
```javascript
const FROM_EMAIL = 'onboarding@resend.dev'; // Change this to your verified Climate Warden email
```

### 3. Add Environment Variables to Vercel
In your Vercel Project Dashboard (where your website is hosted):
1. Go to **Settings** > **Environment Variables**.
2. Add a new variable named `RESEND_API_KEY` and paste the API key you generated.
3. Add a second variable named `RESEND_AUDIENCE_ID` and paste your Audience ID.

### 4. Deploy!
The moment you push this code to GitHub and Vercel builds it, Vercel will automatically turn `api/subscribe.js` into a live backend server at `/api/subscribe`. 

Your website will automatically send new subscriber emails directly to Resend, securely.
