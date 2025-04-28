/* eslint-disable no-undef */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',   
  port: 587,                     
  auth: {
    user: process.env.SMTP_USER,   
    pass: process.env.SMTP_PASS,   
  },
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { name, phone, subject, message } = req.body;

  const mailOptions = {
    from: `"Website Contact" <${process.env.VERIFIED_SENDER_EMAIL}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New message from ${name} - ${subject}`,
    text: `Name: ${name}\nPhone: ${phone}\nMessage:\n${message}`, 
    html: `<h2>New Message Received</h2><p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b><br>${message}</p>`,
  };
  

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email', error });
    } else {
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
