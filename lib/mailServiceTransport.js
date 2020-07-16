'use strict';

const nodemailer = require('nodemailer');

// crear transport
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_SERVICE_USER,
    pass: process.env.MAIL_SERVICE_PASS,
  }
});

module.exports = transporter;