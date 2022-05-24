import mongoose from 'mongoose';
import * as yup from 'yup';
import { isValidCpf } from '../util/cpf';
import { isValidTel } from '../util/tel';

const ValidationUserEdit = (req, res, next) => {
  const schema = yup.object().shape({
    id: yup
      .string()
      .required('O id do usuário é necessário')
      .test('is-id-mongo', 'Informe um user id válido', (value) =>
        mongoose.Types.ObjectId.isValid(value),
      ),
    name: yup.string(),
    tel: yup
      .string()
      .test(
        'is-tel',
        'É necessário informar um telefone válido',
        (value) => !value || isValidTel(value),
      ),
    cpf: yup
      .string()
      .test(
        'is-cpf',
        'Informe um CPF válido',
        (value) => !value || isValidCpf(value),
      ),
    email: yup.string().email(),
    dateOfBirth: yup.date(),
    role: yup
      .string()
      .test(
        'is-role',
        'Informe uma permissão existente',
        (value) => !value || value === 'g' || value === 'c',
      ),
    workload: yup.number().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationUserEdit;
