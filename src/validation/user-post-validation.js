import mongoose from 'mongoose';
import * as yup from 'yup';
import { isValidCpf } from '../util/cpf';
import { isValidPassword } from '../util/password';
import { isValidTel } from '../util/tel';

const ValidationUserPost = (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required('O nome é necessário'),
    password: yup
      .string()
      .required('A senha é necessária')
      .test(
        'is-password',
        'Informe uma senha com no mínimo de oito caracteres, pelo menos, uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
        (value) => isValidPassword(value),
      ),
    tel: yup
      .string()
      .required('O telefone é necessário')
      .test('is-tel', 'É necessário informar um telefone válido', (value) =>
        isValidTel(value),
      ),
    cpf: yup
      .string()
      .required('O CPF é necessário')
      .test('is-cpf', 'Informe um CPF válido', (value) => isValidCpf(value)),
    email: yup.string().email().required('O e-mail é necessário'),
    dateOfBirth: yup.date().required('A data de nascimento é necessária'),
    companyId: yup
      .string()
      .required('O id da empresa é necessário')
      .test('is-id-mongo', 'Informe um company id válido', (value) =>
        mongoose.Types.ObjectId.isValid(value),
      ),
    role: yup
      .string()
      .required('Uma permissão é necessária')
      .test(
        'is-role',
        'Informe uma permissão existente',
        (value) => value === 'g' || value === 'c',
      ),
    workload: yup.number().min(1).required('A carga horária é necessária'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationUserPost;
