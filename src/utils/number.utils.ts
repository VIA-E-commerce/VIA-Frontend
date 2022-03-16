export function calcRoundedPercentage(percentage: number) {
  return Math.trunc(percentage * 100) / 100;
}

export function calcIntegerPercentage(number: number, percentage: number) {
  return Math.floor(number * percentage);
}
