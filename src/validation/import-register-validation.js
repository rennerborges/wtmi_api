/* eslint-disable no-restricted-globals */
import * as yup from 'yup';

const ValidationRegisterImport = (req, res, next) => {
  const schema = yup.array().of(
    yup.object().shape({
      'Id do participante': yup
        .string()
        .required('O id do participante é obrigatório'),
      Id: yup.string().required('O id é obrigatório'),
      Atividade: yup.string().required('A atividade é obrigatória'),
      'Data de Inscrição': yup
        .string()
        .required('A data de inscrição é obrigatória'),
      'Hora de Inscrição': yup
        .string()
        .required('A hora de inscrição é obrigatória'),
      'Inscrição no evento': yup
        .string()
        .required('A inscrição do evento é obrigatória'),
      Email: yup
        .string()
        .email()
        .required('A inscrição do evento é obrigatória'),
      Nome: yup.string().required('O nome é obrigatório'),
    }),
  );

  return schema
    .validate(req.jsonFile)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationRegisterImport;
