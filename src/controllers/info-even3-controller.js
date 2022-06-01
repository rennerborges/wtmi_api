/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { TransformDateUsaString } from '../util/date';
import schedulersModel from '../models/schedulers';
import registersModel from '../models/registers';

/* eslint-disable max-len */
export const ImportSchedule = async (req, res, next) => {
  /* #swagger.tags = ["Importação"] */
  /* #swagger.description = "Rota responsável por importar as programações do arquivo gerado pelo Even3" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "multipart/form-data": { 
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary"
            }
          } 
        }, 
      } 
    } 
    } 
  */
  try {
    const object = req.jsonFile;
    const schedulers = [];

    await schedulersModel.deleteMany();

    for (const schedule of object) {
      const initialDate = TransformDateUsaString(
        schedule.Data,
        schedule['Hora início'],
      );

      const finalDate = TransformDateUsaString(
        schedule.Data,
        schedule['Hora fim'],
      );

      const result = await schedulersModel.create({
        code: schedule['Número da atividade'],
        title: schedule['Título'],
        initialDate,
        finalDate,
        location: schedule.Local,
        vacancyLimit: Number(schedule['Limite de vagas']),
        numberOfSubscribers: Number(schedule['Quantidade inscritos']),
        pendingRegistrations: Number(schedule.Pendentes),
      });

      schedulers.push(result);
    }

    res.json({ schedulers });
  } catch (error) {
    next(error);
  }
};

export const ImportRegistered = async (req, res, next) => {
  /* #swagger.tags = ["Importação"] */
  /* #swagger.description = "Rota responsável por importar as inscrições do arquivo gerado pelo Even3" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "multipart/form-data": { 
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary"
            }
          } 
        }, 
      } 
    } 
    } 
  */
  try {
    const object = req.jsonFile;
    const registers = [];

    await registersModel.deleteMany();

    for (const register of object) {
      const result = await registersModel.create({
        codePartcipant: register['Id do participante'],
        codeSchedule: register.Id,
        titleSchedule: register.Atividade,
        registrationDate: TransformDateUsaString(
          register['Data de Inscrição'],
          register['Hora de Inscrição'],
        ),
        typeTicket: register['Inscrição no evento'],
        email: register.Email,
        name: register.Nome,
      });

      registers.push(result);
    }

    res.json({ registers });
  } catch (error) {
    next(error);
  }
};

export default {
  ImportSchedule,
  ImportRegistered,
};
