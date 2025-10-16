# EmailJS Setup Guide

## Quick Fix for "Sorry, there was an error sending your message"

The error is likely because the EmailJS public key is not configured. Follow these steps:

### 1. Get Your EmailJS Public Key

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Go to **Account** → **General**
4. Copy your **Public Key** (it looks like: `user_xxxxxxxxxxxxxxxx`)

### 2. Update Configuration

Open `src/config/emailjs.js` and replace `YOUR_PUBLIC_KEY` with your actual public key:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_olf6rcl',
  TEMPLATE_ID: '__ejs-test-mail-service_',
  PUBLIC_KEY: 'user_your_actual_public_key_here', // Replace this
};
```

### 3. Verify Your EmailJS Setup

Make sure you have:

✅ **Email Service**: Connected (Gmail, Outlook, etc.)  
✅ **Email Template**: Created with these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{to_name}}`
- `{{reply_to}}`

### 4. Test the Form

1. Save the configuration file
2. Restart your development server (`npm start`)
3. Try submitting the contact form
4. Check the browser console for detailed error messages

### 5. Common Issues & Solutions

**Issue**: "EmailJS not configured"  
**Solution**: Add your public key to `src/config/emailjs.js`

**Issue**: "Invalid template"  
**Solution**: Check your template ID and make sure the template exists

**Issue**: "Invalid service"  
**Solution**: Check your service ID and make sure the service is active

**Issue**: "Network error"  
**Solution**: Check your internet connection and EmailJS service status

### 6. Debug Information

The form now includes detailed console logging. Open your browser's Developer Tools (F12) and check the Console tab when testing the form to see exactly what's happening.

### 7. Alternative: Test Without EmailJS

If you want to test the form without EmailJS, you can temporarily comment out the EmailJS code and use a simple alert:

```javascript
// Temporary test - replace the EmailJS code with:
alert('Form submitted successfully! (Test mode)');
setSubmitStatus('success');
setFormData({ name: '', email: '', message: '' });
```

---

**Need Help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or the console logs for detailed error information.
