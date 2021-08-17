let timerId = null;

export function debouncing(func, delay, ...args) {
  clearInterval(timerId);
  timerId = setTimeout(func.bind(null,...args),delay);
}
