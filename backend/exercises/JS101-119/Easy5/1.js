function dms(degreeTotal) {

  while (degreeTotal < 0 || degreeTotal > 360) {
    if (degreeTotal < 0) degreeTotal += 360;
    if (degreeTotal > 360) degreeTotal -= 360;
  }

  let degree = parseInt(degreeTotal, 10);
  let minuteTotal = (degreeTotal - degree) * 60;
  let minute = parseInt(minuteTotal, 10);
  let second = parseInt((minuteTotal - minute) * 60, 10);

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  return `${degree}˚${minute}'${second}"`;
}

console.log(dms(-420));