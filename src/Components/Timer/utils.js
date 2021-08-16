const options = { dateStyle: 'full', timeStyle: 'medium' };

export function formatDate(current, format = 'ko-KR') {
  return new Intl.DateTimeFormat(format, options).format(current);
}