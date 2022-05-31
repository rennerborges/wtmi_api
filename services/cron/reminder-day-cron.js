import sendEmail from '../email/email-controller';
import cronValues from './values-cron';
import { CronSchedule } from './util';

function SendEmailReminderDay() {
  sendEmail({
    text: 'A aula começara em breve!',
    subject: 'WTMI - Informa!',
    to: ['rennerferreira23@gmail.com'],
  });
}

export default CronSchedule(
  cronValues.EVERY_DAY_00_HOURS,
  SendEmailReminderDay,
);
