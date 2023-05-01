function isPalindromicNumber(number) {
  return number.toString() === number.toString().split("").reverse().join("");
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true