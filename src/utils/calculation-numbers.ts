export function calculateNumberFromString(fn: any) {
  // eslint-disable-next-line no-new-func
  return new Function('return ' + fn)();
}
