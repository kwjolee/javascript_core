/*
input : 3 grade scores
output : letter grade

algo :
average 3 grade scores
convert averaged score to letter grade
*/

function getGrade(gd1, gd2, gd3) {
  let avg = (gd1 + gd2 + gd3) / 3;
  let ltGd;
  if (avg < 60) ltGd = "F";
  else if (avg < 70) ltGd = "D";
  else if (avg < 80) ltGd = "C";
  else if (avg < 90) ltGd = "B";
  else ltGd = "A";
  return ltGd;
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"