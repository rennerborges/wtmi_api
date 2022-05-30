import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './variables.env' });

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function sendEmail({ text, subject, to, html }) {
  const mailSent = await transporter.sendMail({
    text,
    subject,
    from: `WTMI <${process.env.USER_EMAIL}>`,
    to,
    html,
  });

  // eslint-disable-next-line no-console
  console.log(mailSent);
}
