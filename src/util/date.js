import moment from 'moment';
import 'moment-timezone';

export function MomentSpeed(date) {
  if (!date) {
    return moment().locale('pt-br').tz('America/Sao_Paulo');
  }

  return moment(date).locale('pt-br').tz('America/Sao_Paulo');
}

export function FormatDate(format, date) {
  return MomentSpeed(date).format(format);
}

export function TransformDateUsa(date, hour = '') {
  const [day, mounth, year] = date.split('/');
  return MomentSpeed(`${year}-${mounth}-${day} ${hour}`);
}

export function SetZeroDate(date) {
  return MomentSpeed(date).hours(0).minutes(0).seconds(0);
}

export function IsBetween(date, initialDate, finalDate) {
  return MomentSpeed(SetZeroDate(date)).isBetween(
    SetZeroDate(initialDate),
    SetZeroDate(finalDate),
    undefined,
    '[]',
  );
}
