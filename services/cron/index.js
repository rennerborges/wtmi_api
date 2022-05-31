import SendEmailReminderDay from './reminder-day-cron';
import SendEmailTeste from './teste-cron';
import SendRequestSaveServer from './save-server';

class ManagerCron {
  constructor() {
    this.jobs = [SendRequestSaveServer, SendEmailReminderDay, SendEmailTeste];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

export default new ManagerCron();
