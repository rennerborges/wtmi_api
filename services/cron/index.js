import SendEmailReminderDay from './reminder-day-cron';

class ManagerCron {
  constructor() {
    this.jobs = [SendEmailReminderDay];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

export default new ManagerCron();
