/*
input : number - positive integer
output : input number with digits reversed

algo:
convert input number to string
split string to each char (array)
reverse order of chars
join array to one string
convert string to number
*/

function reverseNumber(num) {
  console.log(Number(String(num).split("").reverse().join("")));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1