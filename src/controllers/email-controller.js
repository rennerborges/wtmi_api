import dotenv from 'dotenv';
import sendEmail from '../../services/email/email-controller';
import getTemplateInvite from '../../services/email/templates/invite';
import getTemplateReminderUser from '../../services/email/templates/reminderDay';

dotenv.config({ path: './variables.env' });

export const postInvite = async (req, res) => {
  /* #swagger.description = "Rota responsável por autenticar um usuário" */
  /* #swagger.security = [] */
  /* #swagger.tags = ["Autenticação"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/Login" }, 
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
  /* #swagger.description = "Rota responsável por autenticar um usuário" */
  /* #swagger.security = [] */
  /* #swagger.tags = ["Autenticação"] */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "application/json": { 
        schema: { $ref: "#/components/schemas/Login" }, 
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

export default {
  postInvite,
  postReminderDay,
};
