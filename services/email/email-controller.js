import nodemailer from 'nodemailer';
import emailConfig from '../../config/email';

const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: false,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function sendEmail({ text, subject, to, html }) {
  const mailSent = await transporter.sendMail({
    text,
    subject,
    from: `Speed Point <${emailConfig.user}>`,
    to,
    html,
  });

  // eslint-disable-next-line no-console
  console.log(mailSent);
}
