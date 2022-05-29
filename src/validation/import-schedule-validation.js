/* eslint-disable no-restricted-globals */
import * as yup from 'yup';

const ValidationScheduleImport = (req, res, next) => {
  const schema = yup.array().of(
    yup.object().shape({
      'Número da atividade': yup
        .string()
        .required('O número da atividade é obrigatório'),
      Título: yup.string().required('O título é obrigatório'),
      Data: yup.string().required('A data é obrigatória'),
      'Hora início': yup.string().required('A hora de inicio é obrigatória'),
      'Hora fim': yup.string().required('A hora fim é obrigatória'),
      Local: yup.string().required('O local é obrigatório'),
      'Limite de vagas': yup
        .string()
        .required('O limite de vagas é obrigatório')
        .test(
          'is-valid-qtd-inscritos',
          'É necessário informar um número válido de limite de vagas',
          (value) => !isNaN(Number(value)),
        ),
      'Quantidade inscritos': yup
        .string()
        .required('A quantidade de inscritos é obrigatório')
        .test(
          'is-valid-qtd-inscritos',
          'É necessário informar um número válido de usuários inscritos',
          (value) => !isNaN(Number(value)),
        ),
      Pendentes: yup
        .string()
        .required('A quantidade de inscritos é obrigatório')
        .test(
          'is-valid-pendentes',
          'É necessário informar um número válido de usuários pendentes',
          (value) => !isNaN(Number(value)),
        ),
    }),
  );

  return schema
    .validate(req.jsonFile)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationScheduleImport;
