function century(year) {
  let cent = Math.ceil(year / 100);
  let suffix = pickSuffix(cent);
  return `${cent}${suffix}`;
}

function pickSuffix(num) {
  switch (num % 100) {
    case 11:
    case 12:
    case 13: return 'th';
    default:
      switch (num % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
  }
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
