export function isLeapYear(year: number) {
  if (year % 4 == 0 && year % 100 != 0) return true;
  return false;
}
