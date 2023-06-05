// 1 minute no PEDAC
function solution(number) {
  let sum = 0;
  for (let num = 1; num < number; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
}