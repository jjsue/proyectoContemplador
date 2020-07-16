'use strict';

const nodemailer = require('nodemailer');

// crear transport
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_SERVICE_USER,
    pass: process.env.MAIL_SERVICE_PASS,
  }
});

module.exports = transport;