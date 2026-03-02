# Climate Warden Newsletter Backend

This folder contains the code for your newsletter subscription API. It securely handles your API keys, adds subscribers to your Resend Audience, and sends a welcome email.

## Setup Instructions

Since this is a backend script, it must be hosted on a cloud platform like **Render**, **Railway**, or **Heroku** (Render has an excellent free tier).

### 1. Create a Resend Audience
Log in to Resend, go to **Audiences**, and create one for your newsletter. Note down the `Audience ID`.

### 2. Verify your Domain 
To send emails, you must verify your domain (`climatewarden.org` or similar) inside the Resend dashboard. After verification, update the `FROM_EMAIL` line in `server.js` from `onboarding@resend.dev` to `hello@climatewarden.org` (or whatever email you choose to send from).

### 3. Deploy
1. Push this folder to GitHub.
2. Sign in to Render (or your preferred host) and create a "Web Service".
3. Connect your GitHub repository.
4. Render will detect the `package.json` file. Set the start command to `node server.js`.

### 4. Add Environment Variables
In your hosting provider's dashboard (e.g. Render Environment settings), you **must** add these two secret keys:
`RESEND_API_KEY` = (Your API key from Resend)
`RESEND_AUDIENCE_ID` = (The Audience ID you got in step 1)

### 5. Update the Frontend
Once your host gives you a URL (e.g., `https://newsletter-api.onrender.com`), go to `js/main.js` in your website code. Update the `fetch()` URL in the newsletter form section to point to your new live API link (`https://newsletter-api.onrender.com/api/subscribe`).
