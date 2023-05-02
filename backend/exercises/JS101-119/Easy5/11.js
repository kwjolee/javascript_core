function timeOfDay(minutes) {
  const FULLDAY = 24 * 60;
  while (minutes < 0 || minutes > FULLDAY) {
    if (minutes > 0) minutes -= FULLDAY;
    if (minutes < 0) minutes += FULLDAY;
  }
  let hourNow = Math.floor(minutes / 60);
  let minuteNow = minutes - (hourNow * 60);
  if (hourNow < 10) hourNow = "0" + hourNow;
  if (minuteNow < 10) minuteNow = "0" + minuteNow;

  return `${hourNow}:${minuteNow}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");