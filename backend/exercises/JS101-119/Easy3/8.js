function getGrade(score1, score2, score3) {
  const MEANGRADE = (score1 + score2 + score3) / 3;

  if (MEANGRADE < 60) return "F";
  if (MEANGRADE < 70) return "D";
  if (MEANGRADE < 80) return "C";
  if (MEANGRADE < 90) return "B";
  return "A";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
