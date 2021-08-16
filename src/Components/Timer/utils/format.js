const options = { dateStyle: 'full', timeStyle: 'medium' };

function formatDate(current, format = 'ko-KR') {
  return new Intl.DateTimeFormat(format, options).format(current);
}

export default formatDate;