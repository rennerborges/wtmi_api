/* eslint-disable no-console */
import sendEmail from '../email/email-controller';
import cronValues from './values-cron';
import { CronSchedule } from './util';
import { getUserAndSchedulers } from '../../src/helpers/information-helper';
import getTemplateReminderUser from '../email/templates/reminderDay';

export async function SendEmailReminderDay() {
  const users = await getUserAndSchedulers();
  users.forEach((user) => {
    const templateEmail = getTemplateReminderUser({
      username: user.name,
      schedulers: user.schedulers,
    });

    sendEmail({
      text: 'WTMI - Acompanhe sua agenda de hoje com a gente! 🤩',
      subject: 'WTMI - Acompanhe sua agenda de hoje com a gente! 🤩',
      to: [user.email],
      html: templateEmail,
    });
  });
}

export default CronSchedule(
  cronValues.EVERY_DAY_00_HOURS,
  SendEmailReminderDay,
);
