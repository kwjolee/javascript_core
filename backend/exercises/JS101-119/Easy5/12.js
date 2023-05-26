/*
two functions

after midnight
input : string of hh:mm
output : how many minutes after midnight?

before midnight
input : string of hh:mm
output : how many minutes before midnight?
*/

function afterMidnight(hhmm) {
  let [hh, mm] = hhmm.split(":");
  hh = Number(hh);
  mm = Number(mm);
  let mins = (hh * 60) + mm;
  if (mins === 1440) mins = 0;
  return mins;
}

function beforeMidnight(hhmm) {
  let [hh, mm] = hhmm.split(":");
  hh = Number(hh);
  mm = Number(mm);
  let mins = 1440 - ((hh * 60) + mm);
  if (mins === 1440) mins = 0;
  return mins;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);