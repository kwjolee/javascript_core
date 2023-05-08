function century(year) {
  let centuryNumber = Math.ceil(year / 100);
  let suffix;
  switch (centuryNumber % 10) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  if (centuryNumber % 100 === 11 || centuryNumber % 100  === 12 || centuryNumber % 100  === 13) suffix = "th";
  console.log(`${centuryNumber}${suffix}`);
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