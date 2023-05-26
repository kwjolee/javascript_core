/*
input : number of minutes before or after midnight
  if number is neg, it is before midnight
  if number is pos, it is after midnight
output : time of day in 24 hr hh:mm format
algo:
a full day is 24 * 60 = 1440 minutes
if given min is < 0, add 1440 however many times needed to bring 0 ~ 1440
if given min is > 1440, subtract 1440 until 0 ~ 1440
divide remaining min by 60 and round down for hh
subtract remaining min by hh * to get mm, round down if needed
*/

function timeOfDay(mins) {
  let workMin = mins;
  while (workMin < 0) workMin += 1440;
  while (workMin > 1440) workMin -= 1440;
  let hh = Math.floor(workMin / 60);
  let mm = Math.floor(workMin - (hh * 60));
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;
  return (`${hh}:${mm}`);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");