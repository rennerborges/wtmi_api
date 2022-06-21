/* eslint-disable max-len */
import dotenv from 'dotenv';
import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';
import { getUserAndSchedulers } from '../helpers/information-helper';
import { FormatDate, IsBetween, MomentSpeed, SetZeroDate } from '../util/date';
import { Clone } from '../util/object';

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
  /* #swagger.parameters['data'] = {
      in: "query",
      description: "Data das palestras",
      required: false,
      type: "string",
      example: "2022-06-01T12:40:19.267Z",
  } */

  const { data } = req.query;

  const initialDate = data ? MomentSpeed(data) : null;

  const users = await getUserAndSchedulers(
    initialDate?.isValid() ? initialDate : null,
  );

  if (!users.length) {
    const notFoundMessage = { message: 'Usuários não encontrados' };
    if (initialDate?.isValid()) {
      notFoundMessage.initialDateParam = FormatDate('DD/MM/YYYY', initialDate);
    }

    return res.status(404).json(notFoundMessage);
  }
  res.json({ users });
};

export const getSchedulerByCode = async (req, res, next) => {
  /* #swagger.description = "Rota responsável por buscar a programação atual da sala" */
  /* #swagger.tags = ["Informações"] */
  /* #swagger.parameters['codeScheduler'] = {
      in: "path",
      description: "Código da palestra",
      required: true,
      type: "string",
      example: "S6546",
  } */

  try {
    const { codeScheduler } = req.params;

    const scheduler = await schedulersModel.findOne({
      code: codeScheduler,
    });

    if (!scheduler) {
      return res.status(404).json({ message: 'Programação não encontrada' });
    }

    const dateNow = MomentSpeed();

    const dateInicialScheduler = MomentSpeed(scheduler.initialDate).subtract(
      15,
      'minute',
    );

    const dateFinalScheduler = MomentSpeed(scheduler.finalDate)
      .add(30, 'minute')
      .toISOString();

    if (!IsBetween(dateNow, dateInicialScheduler, dateFinalScheduler)) {
      return res.status(404).json({
        message: 'Não está acontecendo nenhuma programação para esse horário',
      });
    }

    const registers = await registersModel.find({
      codeSchedule: codeScheduler,
      isPresence: false,
    });

    const response = Clone(scheduler);

    response.users = registers.map((register) => ({
      email: register.email,
      name: String(register.name)
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    }));

    res.json({ scheduler: response });
  } catch (error) {
    next(error);
  }
};

export const getSchedulersByRoom = async (req, res) => {
  /* #swagger.description = "Rota responsável por buscar todas os eventos daquela sala" */
  /* #swagger.tags = ["Informações"] */
  /* #swagger.parameters['nameRoom'] = {
      in: "path",
      description: "Nome da sala",
      required: true,
      type: "string",
      example: "Sala 1",
  } */

  const { nameRoom } = req.params;

  const schedulers = await schedulersModel
    .find({
      location: nameRoom,
    })
    .sort({ initialDate: 'asc' });

  const date = SetZeroDate().format('YYYY-MM-DD');
  const dateNow = MomentSpeed();

  const schedulersFilters = schedulers.filter((scheduler) => {
    const dateInicialScheduler = SetZeroDate(scheduler.initialDate);
    const dateFinalScheduler = MomentSpeed(scheduler.finalDate);

    return (
      IsBetween(dateInicialScheduler, date, date) &&
      dateFinalScheduler.isAfter(dateNow.subtract(30, 'minute'))
    );
  });

  if (!schedulersFilters.length) {
    return res
      .status(404)
      .json({ message: 'Não existe programação para essa sala hoje' });
  }

  res.json({ scheduler: schedulersFilters });
};

export const setPresenceScheduler = async (req, res, next) => {
  /* #swagger.description = "Rota responsável por registrar a presença do usuário em uma palestra" */
  /* #swagger.tags = ["Informações"] */
  /* #swagger.parameters['code'] = {
      in: "path",
      description: "Código da palestra",
      required: true,
      type: "string",
      example: "65484",
  } */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/ConfirmPresence" }, 
      } 
    } 
    } 
  */
  try {
    const { code } = req.params;
    const { email } = req.body;

    const scheduler = await schedulersModel.findOne({
      code,
    });

    if (!scheduler) {
      return res.status(404).json({ message: 'Não encontramos esse evento' });
    }

    const alreadyRegister = await registersModel.findOne({
      email,
      codeSchedule: code,
    });

    if (!alreadyRegister) {
      throw new Error('Usuário não vinculado na palestra');
    }

    if (alreadyRegister.isPresence) {
      return res
        .status(409)
        .json({ message: 'Usuário já registrou sua presença nessa palestra!' });
    }

    const dateNow = MomentSpeed();

    const dateInicialScheduler = MomentSpeed(scheduler.initialDate)
      .subtract(15, 'minute')
      .toISOString();

    const dateFinalScheduler = MomentSpeed(scheduler.finalDate)
      .add(30, 'minute')
      .toISOString();

    if (!IsBetween(dateNow, dateInicialScheduler, dateFinalScheduler)) {
      throw new Error('O tempo de registrar sua a presença já expirou');
    }

    await registersModel.findOneAndUpdate(
      {
        email,
        codeSchedule: code,
      },
      { isPresence: true },
    );

    res
      .status(201)
      .json({ message: 'Registro realizado com sucesso!', scheduler });
  } catch (error) {
    next(error);
  }
};

export const getParticipantSchedulerByCode = async (req, res, next) => {
  /* #swagger.description = "Rota responsável por trazer um participante da palestra escolhida" */
  /* #swagger.tags = ["Informações"] */
  /* #swagger.parameters['codeScheduler'] = {
      in: "path",
      description: "Código da palestra",
      required: true,
      type: "string",
      example: "456139",
  } */

  try {
    const { codeScheduler } = req.params;

    const scheduler = await schedulersModel.findOne({
      code: codeScheduler,
    });

    if (!scheduler) {
      return res.status(404).json({ message: 'Programação não encontrada' });
    }

    const registers = await registersModel.find({
      codeSchedule: codeScheduler,
    });

    if (!registers) {
      return res.status(404).json({ message: 'Não há nenhum participante' });
    }

    const participants = registers.map((register) => ({
      email: register.email,
      name: String(register.name)
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    }));

    const indexParticipant =
      Math.floor(Math.random() * (participants.length - 0 + 1)) + 0;

    res.json({ participant: participants[indexParticipant] });
  } catch (error) {
    next(error);
  }
};

export default {
  getSchedulers,
  getUsersSchedulers,
  getSchedulerByCode,
  getSchedulersByRoom,
  setPresenceScheduler,
  getParticipantSchedulerByCode,
};
