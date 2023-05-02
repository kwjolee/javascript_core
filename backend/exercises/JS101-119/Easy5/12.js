function afterMidnight(timeOfDay) {
  let hours = +timeOfDay.split(":")[0];
  let minutes = +timeOfDay.split(":")[1];

  let allMinutes = (hours * 60) + minutes;
  while (allMinutes >= 1440) {
    allMinutes -= 1440;
  }
  return allMinutes;
}

function beforeMidnight(timeOfDay) {
  let allMinutes = 1440 - afterMidnight(timeOfDay);
  while (allMinutes >= 1440) {
    allMinutes -= 1440;
  }
  return allMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);