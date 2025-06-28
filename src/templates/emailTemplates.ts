// Auto-Reply Email Templates for Jones Mukelabai Portfolio

export interface EmailTemplateData {
  senderName: string;
  senderEmail: string;
  subject: string;
  originalMessage: string;
  inquiryType?: 'general' | 'project' | 'job' | 'collaboration';
}

// Main auto-reply template
export const generateAutoReplyTemplate = (data: EmailTemplateData): string => {
  const { senderName, senderEmail, subject, originalMessage } = data;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Message - Jones Mukelabai</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .container {
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
        }
        .logo {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }
        .title {
            color: #1e293b;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
        }
        .subtitle {
            color: #64748b;
            font-size: 16px;
            margin: 8px 0 0 0;
        }
        .content {
            margin: 30px 0;
        }
        .greeting {
            font-size: 18px;
            color: #1e293b;
            margin-bottom: 20px;
        }
        .message-box {
            background: #f1f5f9;
            border-left: 4px solid #3b82f6;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        .response-time {
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            text-align: center;
            margin: 25px 0;
            font-weight: 600;
        }
        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
            margin: 25px 0;
        }
        .service-item {
            background: #f8fafc;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
        }
        .service-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 8px;
        }
        .service-desc {
            color: #64748b;
            font-size: 14px;
        }
        .contact-info {
            background: #1e293b;
            color: white;
            padding: 25px;
            border-radius: 12px;
            margin: 25px 0;
        }
        .contact-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        .contact-item {
            margin: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .social-links {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin: 25px 0;
        }
        .social-link {
            display: inline-block;
            padding: 12px;
            background: #f1f5f9;
            border-radius: 8px;
            text-decoration: none;
            color: #3b82f6;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
        }
        .signature {
            margin-top: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
            border-radius: 12px;
            text-align: center;
        }
        .signature-name {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 5px;
        }
        .signature-title {
            color: #3b82f6;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">JM</div>
            <h1 class="title">Thank You for Reaching Out!</h1>
            <p class="subtitle">Your message has been received successfully</p>
        </div>

        <div class="content">
            <div class="greeting">
                Hello ${senderName},
            </div>

            <p>Thank you for taking the time to contact me through my portfolio! I really appreciate your interest in my work and services.</p>

            <div class="message-box">
                <strong>Your Message Summary:</strong><br>
                <strong>Subject:</strong> ${subject}<br>
                <strong>From:</strong> ${senderEmail}<br>
                <strong>Message:</strong> ${originalMessage.substring(0, 200)}${originalMessage.length > 200 ? '...' : ''}
            </div>

            <div class="response-time">
                ⚡ I typically respond within 24-48 hours
            </div>

            <p>I've received your inquiry and will review it carefully. Based on your message, I'll provide you with detailed information about how I can help with your project or answer any questions you may have.</p>

            <h3 style="color: #1e293b; margin-top: 30px;">What I Specialize In:</h3>
            <div class="services">
                <div class="service-item">
                    <div class="service-title">🌐 Web Development</div>
                    <div class="service-desc">Modern, responsive websites using React, TypeScript, and cutting-edge technologies</div>
                </div>
                <div class="service-item">
                    <div class="service-title">📱 Mobile Apps</div>
                    <div class="service-desc">Cross-platform mobile applications with Flutter and React Native</div>
                </div>
                <div class="service-item">
                    <div class="service-title">💻 Software Development</div>
                    <div class="service-desc">Custom software solutions and system architecture design</div>
                </div>
                <div class="service-item">
                    <div class="service-title">🤖 Machine Learning</div>
                    <div class="service-desc">AI-powered solutions and data-driven applications</div>
                </div>
            </div>

            <h3 style="color: #1e293b; margin-top: 30px;">While You Wait:</h3>
            <ul style="color: #64748b;">
                <li>📂 Check out my <strong>featured projects</strong> on my portfolio</li>
                <li>💼 View my <strong>LinkedIn profile</strong> for professional background</li>
                <li>🔗 Explore my <strong>GitHub repositories</strong> for code samples</li>
                <li>📄 Download my <strong>CV/Resume</strong> for detailed experience</li>
            </ul>

            <div class="contact-info">
                <div class="contact-title">📞 Alternative Contact Methods:</div>
                <div class="contact-item">📧 Email: jones.mukelabai@example.com</div>
                <div class="contact-item">📱 Phone: +260 XXX XXX XXX</div>
                <div class="contact-item">📍 Location: Zambia</div>
                <div class="contact-item">🌐 Portfolio: [Your Portfolio URL]</div>
            </div>

            <div class="social-links">
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Twitter</a>
            </div>

            <p style="margin-top: 25px;">I'm excited about the possibility of working together and look forward to discussing your project in detail. Thank you again for considering me for your development needs!</p>
        </div>

        <div class="signature">
            <div class="signature-name">Jones Mukelabai</div>
            <div class="signature-title">Full-Stack Developer & IT Graduate</div>
        </div>

        <div class="footer">
            <p>This is an automated response to confirm receipt of your message. I will personally respond to you soon!</p>
            <p style="margin-top: 10px;">© 2025 Jones Mukelabai. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

// Specific templates for different inquiry types
export const projectInquiryTemplate = (data: EmailTemplateData): string => {
  return generateAutoReplyTemplate(data).replace(
    'I\'ve received your inquiry and will review it carefully.',
    `I\'ve received your project inquiry and I'm excited about the opportunity! I'll review your requirements carefully and prepare a detailed proposal including timeline, approach, and investment details.`
  );
};

export const jobInquiryTemplate = (data: EmailTemplateData): string => {
  return generateAutoReplyTemplate(data).replace(
    'I\'ve received your inquiry and will review it carefully.',
    `Thank you for considering me for this opportunity! I'll review the position details and get back to you with my availability, relevant experience, and any questions I might have.`
  );
};

export const collaborationTemplate = (data: EmailTemplateData): string => {
  return generateAutoReplyTemplate(data).replace(
    'I\'ve received your inquiry and will review it carefully.',
    `I love collaborating with fellow developers and creators! I'll review your collaboration proposal and share my thoughts on how we can work together to create something amazing.`
  );
};

// Simple text version for email services that don't support HTML
export const generateTextAutoReply = (data: EmailTemplateData): string => {
  const { senderName, senderEmail, subject, originalMessage } = data;
  
  return `
Hello ${senderName},

Thank you for reaching out through my portfolio! I really appreciate your interest in my work and services.

YOUR MESSAGE SUMMARY:
Subject: ${subject}
From: ${senderEmail}
Message: ${originalMessage.substring(0, 200)}${originalMessage.length > 200 ? '...' : ''}

⚡ RESPONSE TIME: I typically respond within 24-48 hours

I've received your inquiry and will review it carefully. Based on your message, I'll provide you with detailed information about how I can help with your project or answer any questions you may have.

WHAT I SPECIALIZE IN:
🌐 Web Development - Modern, responsive websites using React, TypeScript
📱 Mobile Apps - Cross-platform applications with Flutter and React Native  
💻 Software Development - Custom solutions and system architecture
🤖 Machine Learning - AI-powered solutions and data-driven applications

WHILE YOU WAIT:
- Check out my featured projects on my portfolio
- View my LinkedIn profile for professional background
- Explore my GitHub repositories for code samples
- Download my CV/Resume for detailed experience

CONTACT INFORMATION:
📧 Email: jones.mukelabai@example.com
📱 Phone: +260 XXX XXX XXX
📍 Location: Zambia
🌐 Portfolio: [Your Portfolio URL]

I'm excited about the possibility of working together and look forward to discussing your project in detail!

Best regards,

Jones Mukelabai
Full-Stack Developer & IT Graduate
Information Technology Graduate

---
This is an automated response to confirm receipt of your message. I will personally respond to you soon!
© 2025 Jones Mukelabai. All rights reserved.
  `.trim();
};

// Template selector based on message content
export const selectTemplate = (data: EmailTemplateData): string => {
  const message = data.originalMessage.toLowerCase();
  const subject = data.subject.toLowerCase();
  
  if (message.includes('project') || message.includes('website') || message.includes('app') || subject.includes('project')) {
    return projectInquiryTemplate(data);
  } else if (message.includes('job') || message.includes('position') || message.includes('hire') || subject.includes('job')) {
    return jobInquiryTemplate(data);
  } else if (message.includes('collaborate') || message.includes('partnership') || subject.includes('collaboration')) {
    return collaborationTemplate(data);
  } else {
    return generateAutoReplyTemplate(data);
  }
};