# EmailJS 400 Error Fix Guide

## 🚨 Error: 400 Bad Request

The 400 error from EmailJS typically means there's an issue with your template configuration or variables.

## 🔍 Common Causes & Solutions:

### 1. **Template Variables Mismatch**
Your EmailJS template might not have the correct variable names.

**Check your EmailJS template has these variables:**
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{to_name}}`
- `{{reply_to}}`

### 2. **Template ID Issue**
The template ID `__ejs-test-mail-service_` might be incorrect.

**To fix:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Templates**
3. Find your template and copy the correct **Template ID**
4. Update `src/config/emailjs.js`:
   ```javascript
   TEMPLATE_ID: 'your_correct_template_id_here'
   ```

### 3. **Service Not Active**
Your email service might not be properly connected.

**To fix:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Services**
3. Make sure your service is **Active** and **Connected**
4. Test the service connection

### 4. **Template Content Issue**
Your template might have invalid content or missing required fields.

**To fix:**
1. Go to your EmailJS template
2. Make sure it has:
   - **Subject line** (required)
   - **Email content** with proper variables
   - **From name** and **From email** fields

## 🛠️ Quick Debug Steps:

1. **Check Console Logs**: Look for the detailed error in browser console
2. **Verify Template**: Make sure your template exists and is active
3. **Test Service**: Verify your email service is connected
4. **Check Variables**: Ensure template variables match exactly

## 📝 Example Working Template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_name}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

## 🔧 Alternative: Create New Template

If the current template doesn't work:

1. **Create a new template** in EmailJS dashboard
2. **Use simple variables**:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
3. **Update the template ID** in your config
4. **Test again**

## 📞 Need Help?

Check the EmailJS documentation: https://www.emailjs.com/docs/
