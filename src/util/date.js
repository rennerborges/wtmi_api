import moment from 'moment';

export function MomentSpeed(date) {
  if (!date) {
    return moment().locale('pt-br');
  }
  return moment(date).locale('pt-br');
}

export function FormatDate(format, date) {
  return MomentSpeed(date).format(format);
}

export function TransformDateUsa(date, hour = '') {
  const [day, mounth, year] = date.split('/');

  return `${year}-${mounth}-${day} ${hour}`;
}
