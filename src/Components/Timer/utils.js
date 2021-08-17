const options = { dateStyle: "full", timeStyle: "medium" };

export function formatDate(current, format = "ko-KR", isChecked) {
  if (isChecked === false) {
    return new Intl.DateTimeFormat(format, { dateStyle: "full" }).format(
      current
    );
  } else return new Intl.DateTimeFormat(format, options).format(current);
}
