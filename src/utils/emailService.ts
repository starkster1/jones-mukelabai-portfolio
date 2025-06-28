// Formspree Configuration and Service
// No additional packages needed - uses native fetch API

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Formspree Configuration
const FORMSPREE_CONFIG = {
  formId: 'YOUR_FORM_ID', // Replace with your actual Formspree form ID
  endpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Replace YOUR_FORM_ID
};

export const sendEmailWithFormspree = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch(FORMSPREE_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email, // This tells Formspree where to send replies
        _subject: `Portfolio Contact: ${formData.subject}`, // Custom subject line for your notification
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email via Formspree');
    }

    return await response.json();
  } catch (error) {
    console.error('Formspree submission error:', error);
    throw error;
  }
};

// Alternative: EmailJS service (if you want to switch later)
export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<void> => {
  try {
    // You'll need to install EmailJS: npm install @emailjs/browser
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'jones.mukelabai@example.com', // Replace with your actual email
    };

    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email via EmailJS');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};

// Mailto fallback (always works)
export const createMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Subject: ${formData.subject}\n\n` +
    `Message:\n${formData.message}`
  );
  
  return `mailto:jones.mukelabai@example.com?subject=${subject}&body=${body}`;
};

// Utility function to validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to validate form data
export const validateFormData = (formData: ContactFormData): string[] => {
  const errors: string[] = [];
  
  if (!formData.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!formData.subject.trim()) {
    errors.push('Subject is required');
  }
  
  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return errors;
};