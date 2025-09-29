import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// Initialize transporter once
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
});

// Input validation
const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'education', 'specialization', 'aggregate', 'passoutYear', 'programInterest'];

// Sanitize input
const sanitize = (input) => sanitizeHtml(input || '', {
    allowedTags: [],
    allowedAttributes: {},
});

export default async function handler(req, res) {
    // Check method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Validate environment variables
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
        console.error('Missing email configuration');
        return res.status(500).json({ message: 'Server configuration error' });
    }

    // Destructure and validate input
    const {
        firstName,
        lastName,
        email,
        phone,
        education,
        specialization,
        aggregate,
        passoutYear,
        programInterest,
        skills,
        experience,
        companies,
    } = req.body;

    // Check required fields
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: `Missing required field: ${field}` });
        }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Sanitize inputs
    const sanitizedData = {
        firstName: sanitize(firstName),
        lastName: sanitize(lastName),
        email: sanitize(email),
        phone: sanitize(phone),
        education: sanitize(education),
        specialization: sanitize(specialization),
        aggregate: sanitize(aggregate),
        passoutYear: sanitize(passoutYear),
        programInterest: sanitize(programInterest),
        skills: sanitize(skills),
        experience: sanitize(experience),
        companies: sanitize(companies),
    };

    // Email content
    const mailOptions = {
        from: `"Registration System" <${process.env.ADMIN_EMAIL}>`, // Fixed sender
        to: process.env.ADMIN_EMAIL,
        subject: `New Training Registration - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { background: #f9fafb; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Training Program Registration</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${sanitizedData.firstName} ${sanitizedData.lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${sanitizedData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${sanitizedData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Education:</div>
                <div class="value">${sanitizedData.education}</div>
              </div>
              <div class="field">
                <div class="label">Specialization:</div>
                <div class="value">${sanitizedData.specialization}</div>
              </div>
              <div class="field">
                <div class="label">Aggregate Percentage:</div>
                <div class="value">${sanitizedData.aggregate}%</div>
              </div>
              <div class="field">
                <div class="label">Passout Year:</div>
                <div class="value">${sanitizedData.passoutYear}</div>
              </div>
              <div class="field">
                <div class="label">Interested Program:</div>
                <div class="value">${sanitizedData.programInterest}</div>
              </div>
              <div class="field">
                <div class="label">Technical Skills:</div>
                <div class="value">${sanitizedData.skills || 'None'}</div>
              </div>
              <div class="field">
                <div class="label">Experience:</div>
                <div class="value">${sanitizedData.experience || 'None'}</div>
              </div>
              <div class="field">
                <div class="label">Preferred Companies:</div>
                <div class="value">${sanitizedData.companies || 'Not specified'}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
}