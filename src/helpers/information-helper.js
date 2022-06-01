import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';
import { IsBetween } from '../util/date';

export const getUserAndSchedulers = async (initialDate) => {
  const schedulers = await schedulersModel.find();
  const registers = await registersModel.find();

  const schedulersMap = {};

  schedulers.forEach((scheduler) => {
    if (
      !initialDate ||
      IsBetween(initialDate, scheduler.initialDate, scheduler.finalDate)
    ) {
      schedulersMap[scheduler.code] = scheduler;
    }
  });

  const usersMap = {};

  registers.forEach((register) => {
    const { codePartcipant, codeSchedule } = register;
    if (schedulersMap[codeSchedule]) {
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
    }
  });

  return Object.values(usersMap);
};

export default {
  getUserAndSchedulers,
};
