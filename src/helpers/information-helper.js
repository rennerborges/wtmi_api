import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';
import { IsBetween, SetZeroDate } from '../util/date';
import { orderByKeyObject } from '../util/order';

export const getUserAndSchedulers = async (initialDate) => {
  const schedulers = await schedulersModel.find();
  const registers = await registersModel.find();

  const schedulersMap = {};

  schedulers.forEach((scheduler) => {
    if (
      !initialDate ||
      IsBetween(
        SetZeroDate(initialDate),
        SetZeroDate(scheduler.initialDate).format('YYYY-MM-DD'),
        SetZeroDate(scheduler.finalDate).format('YYYY-MM-DD'),
      )
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

  return Object.values(usersMap).map((item) => ({
    ...item,
    schedulers: orderByKeyObject(item.schedulers, 'initialDate', 'ASC'),
  }));
};

export default {
  getUserAndSchedulers,
};
