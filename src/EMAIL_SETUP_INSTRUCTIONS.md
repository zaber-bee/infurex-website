# Email Setup Instructions for Infurex Contact Form

The contact form is configured to send email notifications to **infurexmarketing@gmail.com** when someone submits an inquiry.

## Option 1: EmailJS (Recommended)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose Gmail and connect your infurexmarketing@gmail.com account
   - Note your Service ID (e.g., "service_abc123")

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:

   ```
   Subject: New Project Inquiry from {{from_name}}

   You have received a new project inquiry from your Infurex website:

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   Project Type: {{project_type}}
   Budget: {{budget}}

   Message:
   {{message}}

   Attached Files: {{files}}

   ---
   This inquiry was submitted through the Infurex website contact form.
   ```

   - Set the "To email" field to: infurexmarketing@gmail.com
   - Note your Template ID (e.g., "template_xyz789")

4. **Get Your Public Key**
   - Go to "Account" > "General"
   - Find your Public Key (e.g., "user_abc123xyz")

5. **Update the Code**
   - Open `/components/Contact.tsx`
   - Find lines 61-65 where it says:
     ```typescript
     await emailjs.default.send(
       'YOUR_SERVICE_ID',    // Replace with your Service ID
       'YOUR_TEMPLATE_ID',   // Replace with your Template ID
       emailContent,
       'YOUR_PUBLIC_KEY'     // Replace with your Public Key
     );
     ```
   - Replace the placeholders with your actual IDs

6. **Test the Form**
   - Submit a test inquiry through your website
   - Check infurexmarketing@gmail.com for the email
   - Check EmailJS dashboard for delivery status

## Option 2: Mailto Fallback (Already Implemented)

If EmailJS is not configured, the form will automatically fall back to opening the user's default email client with a pre-filled message. This ensures the form always works, even without EmailJS setup.

## Email Content Included:

When someone submits the form, the email will include:
- Full Name
- Email Address
- Phone Number
- Agency/Company
- Project Type
- Budget Range
- Project Details/Message
- List of attached file names (file upload works, but actual files won't be sent via EmailJS free plan)

## Important Notes:

- **EmailJS Free Plan**: 200 emails/month, sufficient for most small businesses
- **File Attachments**: EmailJS free plan doesn't support file attachments. Files are validated and displayed to the user, but only file names are sent in the email. For file transfer, consider upgrading EmailJS or using a backend solution.
- **Privacy**: Figma Make is not intended for collecting PII or securing sensitive data. Use appropriate security measures for production.
- **Spam Protection**: Consider adding reCAPTCHA if you receive spam submissions

## Troubleshooting:

- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Gmail blocking**: Ensure you've authorized EmailJS in your Gmail security settings
- **Template variables**: Make sure all variable names in your template match exactly (case-sensitive)
- **Public Key**: Don't confuse Public Key with Service ID or Template ID

## Support:

For EmailJS-specific issues, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
