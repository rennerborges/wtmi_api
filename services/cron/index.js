import SendEmailReminderDay from './reminder-day-cron';
import SendEmailTeste from './teste-cron';

class ManagerCron {
  constructor() {
    this.jobs = [SendEmailReminderDay, SendEmailTeste];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

export default new ManagerCron();
