# Formspree Contact Form Setup Guide

Your contact form is now configured to use **Formspree** as the primary submission method with auto-reply functionality.

## 🚀 Quick Setup Steps

### 1. Create Formspree Account
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account (allows 50 submissions/month)
3. Verify your email address

### 2. Create a New Form
1. Click **"New Form"** in your Formspree dashboard
2. Give your form a name: `"Jones Mukelabai Portfolio Contact"`
3. Copy the **Form ID** (looks like `xpznvqko` or similar)

### 3. Update Your Code
In `src/components/Contact.tsx`, replace this line:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

With your actual Form ID:
```typescript
const response = await fetch('https://formspree.io/f/xpznvqko', {
```

### 4. Configure Auto-Reply in Formspree

#### Option A: Simple Auto-Reply (Recommended)
1. Go to your form settings in Formspree dashboard
2. Click **"Settings"** → **"Auto-Reply"**
3. Enable auto-reply and use this template:

**Subject:** `Thank you for contacting Jones Mukelabai`

**Message:**
```
Hello {{name}},

Thank you for reaching out through my portfolio! I really appreciate your interest in my work and services.

YOUR MESSAGE SUMMARY:
Subject: {{subject}}
Message: {{message}}

⚡ RESPONSE TIME: I typically respond within 24-48 hours

I've received your inquiry and will review it carefully. Based on your message, I'll provide you with detailed information about how I can help with your project or answer any questions you may have.

WHAT I SPECIALIZE IN:
🌐 Web Development - Modern, responsive websites using React, TypeScript
📱 Mobile Apps - Cross-platform applications with Flutter and React Native  
💻 Software Development - Custom solutions and system architecture
🤖 Machine Learning - AI-powered solutions and data-driven applications

CONTACT INFORMATION:
📧 Email: jones.mukelabai@example.com
📱 Phone: +260 XXX XXX XXX
📍 Location: Zambia

I'm excited about the possibility of working together and look forward to discussing your project in detail!

Best regards,

Jones Mukelabai
Full-Stack Developer & IT Graduate
Information Technology Graduate

---
This is an automated response to confirm receipt of your message. I will personally respond to you soon!
© 2025 Jones Mukelabai. All rights reserved.
```

#### Option B: Advanced HTML Auto-Reply
1. Enable **"HTML Auto-Reply"** in Formspree settings
2. Copy the HTML template from `src/templates/emailTemplates.ts`
3. Paste it into the HTML auto-reply field
4. Replace template variables:
   - `${senderName}` → `{{name}}`
   - `${senderEmail}` → `{{email}}`
   - `${subject}` → `{{subject}}`
   - `${originalMessage}` → `{{message}}`

### 5. Configure Form Settings

#### Notifications
- **Email notifications:** Add your email `jones.mukelabai@example.com`
- **Subject line:** `New Portfolio Contact from {{name}}`

#### Spam Protection
- Enable **reCAPTCHA** (recommended)
- Enable **Honeypot** protection

#### Redirects (Optional)
- **Success redirect:** Your portfolio URL + `#contact`
- **Error redirect:** Your portfolio URL + `#contact`

## 📧 Form Fields Configuration

Your form sends these fields to Formspree:
- `name` - Sender's full name
- `email` - Sender's email address  
- `subject` - Message subject
- `message` - Message content
- `_replyto` - Sets reply-to address (automatically set to sender's email)
- `_subject` - Custom subject line for your notification email

## 🎯 Features Included

✅ **Instant Submission** - No page reload required
✅ **Auto-Reply** - Professional response sent immediately  
✅ **Spam Protection** - Built-in reCAPTCHA and honeypot
✅ **Email Notifications** - Get notified of new messages
✅ **Form Validation** - Client-side and server-side validation
✅ **Loading States** - Visual feedback during submission
✅ **Error Handling** - Graceful error messages
✅ **Backup Method** - Mailto fallback if Formspree fails
✅ **Mobile Optimized** - Works perfectly on all devices

## 🔧 Testing Your Form

1. **Test Submission:**
   - Fill out your contact form
   - Submit the form
   - Check your email for the notification
   - Check the sender's email for the auto-reply

2. **Check Formspree Dashboard:**
   - View submissions in real-time
   - Monitor form analytics
   - Manage spam submissions

## 💰 Pricing & Limits

### Free Plan (Perfect for portfolios):
- **50 submissions/month**
- **Auto-reply emails**
- **Spam protection**
- **Email notifications**
- **Form analytics**

### Paid Plans (If you need more):
- **Gold ($10/month):** 1,000 submissions
- **Platinum ($20/month):** 5,000 submissions
- **Custom domains and advanced features**

## 🛠️ Troubleshooting

### Form Not Submitting
1. Check your Form ID is correct
2. Verify your Formspree account is active
3. Check browser console for errors
4. Test with different browsers

### Auto-Reply Not Working
1. Verify auto-reply is enabled in Formspree settings
2. Check spam folders
3. Ensure template variables are correct
4. Test with different email addresses

### Spam Issues
1. Enable reCAPTCHA in Formspree settings
2. Enable honeypot protection
3. Review submissions in Formspree dashboard
4. Block problematic domains if needed

## 🚀 Going Live

1. **Update Email Addresses:**
   - Replace `jones.mukelabai@example.com` with your real email
   - Update phone number and location

2. **Test Everything:**
   - Submit test forms
   - Verify auto-replies work
   - Check email notifications

3. **Monitor Performance:**
   - Check Formspree dashboard regularly
   - Monitor submission analytics
   - Review auto-reply delivery rates

Your contact form is now production-ready with professional auto-reply functionality! 🎉

## 📞 Support

- **Formspree Documentation:** [https://help.formspree.io/](https://help.formspree.io/)
- **Formspree Support:** Available through their dashboard
- **Community:** Stack Overflow with `formspree` tag