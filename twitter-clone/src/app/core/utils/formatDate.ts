export function formatNumber(num: number) {
  // if we have a unique digit append 0
  return num < 10 ? 0 + '' + num : '' + num;
}
