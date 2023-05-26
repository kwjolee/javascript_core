/*
input : year
output : century with proper suffix

rule :
new century starts at year 1 and goes for 100 years
year 1901 = 20th
year 2000 = 20th

1st
2nd
3rd
11th
12th
13th
21st
22nd
23rd
*/

function century(year) {
  let centNum = Math.floor((year - 1) / 100) + 1;
  let suffix;
  if (centNum % 100 === 11 || centNum % 100 === 12 || centNum % 100 === 13) suffix = "th";
  else if (centNum % 10 === 1) suffix = "st";
  else if (centNum % 10 === 2) suffix = "nd";
  else if (centNum % 10 === 3) suffix = "rd";
  else suffix = "th";
  console.log(`${centNum}${suffix}`);
  return `${centNum}${suffix}`;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"