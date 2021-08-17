export function formatDate(current, format = "ko-KR", showClock) {
  const options = { dateStyle: "full" };

  if (showClock) {
    options.timeStyle = "medium";
  }

  return new Intl.DateTimeFormat(format, options).format(current);
}
