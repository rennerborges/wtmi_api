import sendEmail from '../email/email-controller';
import cronValues from './values-cron';
import { CronSchedule } from './util';

function SendEmailTeste() {
  sendEmail({
    text: 'Testando cron no heroku!',
    subject: 'WTMI - Informa!',
    to: ['rennerferreira23@gmail.com'],
  });
}

export default CronSchedule(cronValues.EVERY_DAY_19_HOURS, SendEmailTeste);
