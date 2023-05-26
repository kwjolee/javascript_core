function isPalindromicNumber(number) {
  let numString = String(number);
  return numString === numString.split("").reverse().join("");
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
