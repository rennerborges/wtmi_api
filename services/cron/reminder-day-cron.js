import cron from 'node-cron';
import sendEmail from '../email/email-controller';

function SendEmailReminderDay() {
  sendEmail({
    text: 'A aula começara em breve!',
    subject: 'WTMI - Informa!',
    to: ['rennerferreira23@gmail.com'],
  });
}

export default cron.schedule('40 19  * * *', SendEmailReminderDay, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});
