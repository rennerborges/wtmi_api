import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';

export const getUserAndSchedulers = async () => {
  const schedulers = await schedulersModel.find();
  const registers = await registersModel.find();

  const schedulersMap = {};

  schedulers.forEach((scheduler) => {
    schedulersMap[scheduler.code] = scheduler;
  });

  const usersMap = {};

  registers.forEach((register) => {
    const { codePartcipant, codeSchedule } = register;
    if (usersMap[codePartcipant]) {
      usersMap[codePartcipant].schedulers.push(schedulersMap[codeSchedule]);
    } else {
      usersMap[codePartcipant] = {
        codePartcipant: register.codePartcipant,
        name: register.name,
        email: register.email,
        schedulers: [schedulersMap[codeSchedule]],
      };
    }
  });

  return Object.values(usersMap);
};

export default {
  getUserAndSchedulers,
};
