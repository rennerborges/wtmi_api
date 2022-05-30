import cron from 'node-cron';

export const CronSchedule = (frequence, action) =>
  cron.schedule(frequence, action, {
    scheduled: true,
    timezone: 'America/Sao_Paulo',
  });

export default {
  CronSchedule,
};
