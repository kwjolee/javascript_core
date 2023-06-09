/* 6 minutes no PEDAC

initial drop = h
bounce up = h * bounce
drop down = bounce up
next bounce up = bounce up * bounce
next drop down = next bounce up * bounce
repeat until next bounce up is less than or equal to mother height
*/

function bouncingBall(h, bounce, window) {
  if (window >= h) return -1
  if (bounce <= 0 || bounce >= 1) return -1
  if (h <= 0) return -1

  let count = 1;
  let bounceUp = h * bounce;
  while (bounceUp > window) {
    count += 2;
    bounceUp = bounceUp * bounce;
  }
  return count;
}