import moment from 'moment';
import 'moment-timezone';

export function MomentSpeed(date) {
  if (!date) {
    return moment().locale('pt-br').tz('America/Sao_Paulo').format();
  }

  return moment(date).locale('pt-br').tz('America/Sao_Paulo').format();
}

export function FormatDate(format, date) {
  return MomentSpeed(date).format(format);
}

export function TransformDateUsa(date, hour = '') {
  const [day, mounth, year] = date.split('/');
  return MomentSpeed(`${year}-${mounth}-${day} ${hour}`);
}
