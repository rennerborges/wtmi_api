/* eslint-disable max-len */
import dotenv from 'dotenv';
import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';
import { getUserAndSchedulers } from '../helpers/information-helper';

dotenv.config({ path: './variables.env' });

export const getSchedulers = async (req, res) => {
  /* #swagger.description = "Rota responsável por buscar todas as palestras com suas respectivas inscrições" */
  /* #swagger.tags = ["Informações"] */

  const schedulers = await schedulersModel.find();
  const registers = await registersModel.find();

  const response = schedulers.map((scheduler) => ({
    code: scheduler.code,
    title: scheduler.title,
    initialDate: scheduler.initialDate,
    finalDate: scheduler.finalDate,
    location: scheduler.location,
    vacancyLimit: scheduler.vacancyLimit,
    numberOfSubscribers: scheduler.numberOfSubscribers,
    pendingRegistrations: scheduler.pendingRegistrations,
    registers: registers.filter(
      (register) => register.codeSchedule === scheduler.code,
    ),
  }));

  res.json({ schedulers: response });
};

export const getUsersSchedulers = async (req, res) => {
  /* #swagger.description = "Rota responsável por buscar todas os usuários com suas respectivas inscrições" */
  /* #swagger.tags = ["Informações"] */

  const users = await getUserAndSchedulers();

  res.json({ users });
};

export default {
  getSchedulers,
  getUsersSchedulers,
};
