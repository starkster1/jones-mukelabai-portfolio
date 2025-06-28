// Auto-Reply Service for Contact Form
import { EmailTemplateData, selectTemplate, generateTextAutoReply } from '../templates/emailTemplates';

export interface AutoReplyConfig {
  enabled: boolean;
  useHtml: boolean;
  fromEmail: string;
  fromName: string;
  replyToEmail: string;
}

const defaultConfig: AutoReplyConfig = {
  enabled: true,
  useHtml: true,
  fromEmail: 'jones.mukelabai@example.com',
  fromName: 'Jones Mukelabai',
  replyToEmail: 'jones.mukelabai@example.com'
};

// EmailJS Auto-Reply Template Configuration
export const emailJSAutoReplyTemplate = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_AUTO_REPLY_TEMPLATE_ID', // Create a separate template for auto-replies
  publicKey: 'YOUR_PUBLIC_KEY'
};

// Generate auto-reply email content
export const generateAutoReply = (
  senderName: string,
  senderEmail: string,
  subject: string,
  originalMessage: string,
  config: AutoReplyConfig = defaultConfig
): { subject: string; content: string; isHtml: boolean } => {
  
  const templateData: EmailTemplateData = {
    senderName,
    senderEmail,
    subject,
    originalMessage
  };

  const autoReplySubject = `Thank you for your message - Jones Mukelabai Portfolio`;
  
  if (config.useHtml) {
    return {
      subject: autoReplySubject,
      content: selectTemplate(templateData),
      isHtml: true
    };
  } else {
    return {
      subject: autoReplySubject,
      content: generateTextAutoReply(templateData),
      isHtml: false
    };
  }
};

// Send auto-reply using EmailJS
export const sendAutoReply = async (
  senderName: string,
  senderEmail: string,
  subject: string,
  originalMessage: string
): Promise<void> => {
  try {
    const { subject: replySubject, content, isHtml } = generateAutoReply(
      senderName,
      senderEmail,
      subject,
      originalMessage
    );

    // EmailJS template parameters for auto-reply
    const templateParams = {
      to_email: senderEmail,
      to_name: senderName,
      from_name: defaultConfig.fromName,
      from_email: defaultConfig.fromEmail,
      reply_subject: replySubject,
      reply_content: content,
      original_subject: subject,
      original_message: originalMessage,
      is_html: isHtml
    };

    // Import EmailJS dynamically to avoid errors if not installed
    const emailjs = await import('@emailjs/browser');
    
    await emailjs.send(
      emailJSAutoReplyTemplate.serviceId,
      emailJSAutoReplyTemplate.templateId,
      templateParams,
      emailJSAutoReplyTemplate.publicKey
    );

    console.log('Auto-reply sent successfully');
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    // Don't throw error - auto-reply failure shouldn't break the main contact form
  }
};

// Alternative: Generate mailto link for manual auto-reply
export const generateAutoReplyMailto = (
  senderEmail: string,
  senderName: string,
  originalSubject: string,
  originalMessage: string
): string => {
  const { subject, content } = generateAutoReply(senderName, senderEmail, originalSubject, originalMessage, {
    ...defaultConfig,
    useHtml: false // Use text version for mailto
  });

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(content);
  
  return `mailto:${senderEmail}?subject=${encodedSubject}&body=${encodedBody}`;
};