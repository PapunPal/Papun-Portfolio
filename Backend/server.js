const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Import dotenv and load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data from form
app.use(bodyParser.json());
app.use(cors());

// Create a transporter object to send emails using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'papunpal100@gmail.com',  // Use the EMAIL_USER variable from the .env file
    pass: process.env.EMAIL_PASS   // Use the EMAIL_PASS variable from the .env file
  }
});

// Define a POST route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the EMAIL_USER variable from the .env file
    to: 'papunpal100@gmail.com',  // Recipient email (where you want the form submission to go)
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    } else {
      return res.status(200).send('Message sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
