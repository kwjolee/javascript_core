function getGrade(score1, score2, score3) {
  const allScore = (score1 + score2 + score3) / 3;
  if (allScore < 60) return "F";
  if (allScore < 70) return "D";
  if (allScore < 80) return "C";
  if (allScore < 90) return "B";
  return "A";
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"