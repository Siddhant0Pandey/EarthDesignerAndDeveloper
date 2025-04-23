/* eslint-disable no-undef */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,  
    pass: process.env.SMTP_PASS,  
  },
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { name, phone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,  
    to: process.env.RECIPIENT_EMAIL,  
    subject: `New message from ${name} - ${subject}`,
    text: `You have received a new message:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to send email', error });
    } else {
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
