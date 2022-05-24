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
