/* eslint-disable max-len */
import dotenv from 'dotenv';
import sendEmail from '../../services/email/email-controller';
import getTemplateInvite from '../../services/email/templates/invite';
import getTemplateInviteReitor from '../../services/email/templates/inviteReitor';
import getTemplateReminderUser from '../../services/email/templates/reminderDay';
import getTemplateSponsorsInvite from '../../services/email/templates/sponsorsInvite';

dotenv.config({ path: './variables.env' });

export const postInvite = async (req, res) => {
  /* #swagger.description = "Rota responsável por enviar e-mail de convite ao palestrante" */
  /* #swagger.tags = ["Envio de e-mail"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/SendEmailDefault" }, 
      } 
    } 
    } 
  */

  const {
    body: { email, name },
  } = req;

  const templateEmail = getTemplateInvite({
    username: name,
  });

  sendEmail({
    text: 'WTMI - Venha palestrar com a gente!',
    subject: 'WTMI - Venha palestrar com a gente!',
    to: [email],
    html: templateEmail,
  });

  res.json({ message: 'ok' });
};

export const postReminderDay = async (req, res) => {
  /* #swagger.description = "Rota responsável por lebrar os usuários quais eventos ele terá no dia" */
  /* #swagger.tags = ["Envio de e-mail"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/SendEmailDefault" }, 
      } 
    } 
    } 
  */

  const {
    body: { email, name },
  } = req;

  const templateEmail = getTemplateReminderUser({
    username: name,
  });

  sendEmail({
    text: 'WTMI - Acompanhe sua agenda de hoje com a gente! 🤩',
    subject: 'WTMI - Acompanhe sua agenda de hoje com a gente! 🤩',
    to: [email],
    html: templateEmail,
  });

  res.json({ message: 'ok' });
};

export const postSponsorsInvite = async (req, res) => {
  /* #swagger.description = "Rota responsável por lebrar os usuários quais eventos ele terá no dia" */
  /* #swagger.tags = ["Envio de e-mail"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/SendEmailDefault" }, 
      } 
    } 
    } 
  */

  const {
    body: { email, name },
  } = req;

  const templateEmail = getTemplateSponsorsInvite({
    username: name,
  });

  sendEmail({
    text: 'Convite Especial ao 4º WTMI - Evento de Educação e Tecnologia de Morrinhos! 🚀',
    subject:
      'Convite Especial ao 4º WTMI - Evento de Educação e Tecnologia de Morrinhos! 🚀',
    to: [email],
    html: templateEmail,
  });

  res.json({ message: 'ok' });
};

export const postInviteReitor = async (req, res) => {
  /* #swagger.description = "Rota responsável por enviar e-mail de convite ao Reitor" */
  /* #swagger.tags = ["Envio de e-mail"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/SendEmailDefault" }, 
      } 
    } 
    } 
  */

  const {
    body: { email, name },
  } = req;

  const templateEmail = getTemplateInviteReitor({
    username: name,
  });

  sendEmail({
    text: 'Convite Especial ao 4º WTMI - Evento de Educação e Tecnologia de Morrinhos! 🚀',
    subject:
      'Convite Especial ao 4º WTMI - Evento de Educação e Tecnologia de Morrinhos! 🚀',
    to: [email],
    html: templateEmail,
  });

  res.json({ message: 'ok' });
};

export default {
  postInvite,
  postReminderDay,
  postSponsorsInvite,
  postInviteReitor,
};
