import mongoose from 'mongoose';
import sendEmail from '../../services/email/email-controller';
import getTemplateRegisterUser from '../../services/email/templates/login';
import UserModel from '../models/user';
import { FormatDate } from '../util/date';
import { removeValueUndefinedOrNull } from '../util/object';
import { hashPassword } from '../util/password';
import emailConfig from '../../config/email';
import { removeMaskCpf } from '../util/cpf';
import { removeMaskTel } from '../util/tel';

export const getUser = async (req, res, next) => {
  /* #swagger.tags = ["Usuários"] */
  /* #swagger.description = "Rota responsável por trazer um usuário específico pelo ID do mesmo" */
  /* #swagger.parameters['id'] = {
      in: "path",
      description: "ID da empresa",
      required: true,
      type: "string",
  } */
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const user = await UserModel.findOne({
      _id: id,
      companyId: req.user.companyId,
    }).select(['-password']);

    if (!user || !user.enabled) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res) => {
  /* #swagger.tags = ["Usuários"] */
  /* #swagger.description = "Rota responsável por trazer todos usuários" */
  const users = await UserModel.find({
    companyId: req.user.companyId,
  }).select(['-password']);

  res.json({
    users,
  });
};

export const createUser = async (req, res, next) => {
  /* #swagger.tags = ["Usuários"] */
  /* #swagger.description = "Rota responsável por criar um usuário vinculado a uma empresa" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/CreateUser" }, 
      } 
    } 
    } 
  */
  const { body } = req;

  try {
    const passwordHashed = await hashPassword(body.password);

    const userAlreadyExists = await UserModel.findOne({
      $or: [{ email: body.email }, { cpf: body.cpf }],
    });

    if (userAlreadyExists) {
      throw new Error('Usuário já existente');
    }

    const user = new UserModel({
      name: body.name,
      password: passwordHashed,
      email: body.email,
      companyId: body.companyId,
      cpf: removeMaskCpf(body.cpf),
      tel: removeMaskTel(body.tel),
      dateOfBirth: body.dateOfBirth,
      role: body.role,
      workload: body.workload,
      enabled: true,
    });

    // await user.save();

    const templateEmail = getTemplateRegisterUser({
      username: body.name,
      companyName: req.company.fantasyName,
      date: FormatDate('LL'),
    });

    sendEmail({
      text: 'Speed Point - Cadastro realizado com sucesso!',
      subject: 'Speed Point - Cadastro realizado com sucesso!',
      from: `Speed Point <${emailConfig.user}>`,
      to: [body.email],
      html: templateEmail,
    });

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  /* #swagger.tags = ["Usuários"] */
  /* #swagger.description = "Rota responsável por atualizar um usuário utilizando seu ID" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/EditUser" }, 
      } 
    } 
    } 
  */
  const { body } = req;

  const passwordHashed = body.password
    ? await hashPassword(body.password)
    : null;

  try {
    const bodyUpdate = removeValueUndefinedOrNull({
      name: body.name,
      password: passwordHashed,
      tel: removeMaskTel(body.tel),
      workload: body.workload,
    });

    const user = await UserModel.findOneAndUpdate(
      { _id: body.id, companyId: req.user.companyId },
      bodyUpdate,
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  /* #swagger.tags = ["Usuários"] */
  /* #swagger.description = "Rota responsável por desativar um usuário utilizando seu ID" */
  /* #swagger.parameters['id'] = {
      in: "path",
      description: "ID da empresa",
      required: true,
      type: "string",
  } */
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Informe um id válido');
    }

    const bodyUpdate = {
      enabled: false,
    };

    const user = await UserModel.findOneAndUpdate(
      { _id: id, companyId: req.user.companyId },
      bodyUpdate,
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ message: 'Ação realizada com sucesso!' });
  } catch (error) {
    next(error);
  }
};

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
