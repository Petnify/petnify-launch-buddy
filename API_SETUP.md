# SendGrid API Setup for Petnify Contact Form

## Overview
The contact form uses SendGrid to send emails via a Vercel serverless function.

## Files Created/Modified

### 1. `api/send-email.js`
- Vercel serverless function that handles email sending
- Includes CORS support, input validation, and error handling
- Uses SendGrid to send formatted HTML emails

### 2. `src/components/ContactSection.tsx`
- Updated to call `/api/send-email` endpoint
- Removed localhost URL and console.log

### 3. `vercel.json`
- Configuration for Vercel deployment
- Sets up environment variables and function runtime

## Environment Variables

### Local Development
Create a `.env.local` file in the root directory:
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

### Vercel Deployment
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add `SENDGRID_API_KEY` with your SendGrid API key

## SendGrid Setup Requirements

1. **Verified Sender**: The `from` email (`info@petnify.co`) must be verified in SendGrid
2. **API Key**: Use a SendGrid API key with "Mail Send" permissions
3. **Domain Authentication**: For production, consider setting up domain authentication

## Testing

### Local Testing
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check Vercel function logs for any errors

### Production Testing
1. Deploy to Vercel
2. Test the contact form on the live site
3. Check Vercel function logs in the dashboard

## Error Handling

The API includes comprehensive error handling:
- Input validation (required fields, email format)
- SendGrid error logging
- User-friendly error messages
- CORS support for cross-origin requests

## Security Notes

- API key is stored as environment variable
- Input validation prevents injection attacks
- CORS is configured for security
- Email content is properly escaped 