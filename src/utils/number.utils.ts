export function calcRoundedPercentage(percentage: number) {
  return Math.trunc(percentage * 100) / 100;
}

export function calcIntegerPercentage(number: number, percentage: number) {
  return Math.floor(number * percentage);
}

export function getNumberInRange(n: number, min: number, max: number) {
  if (n < min) return max;
  else if (n > max) return min;
  return n;
}
