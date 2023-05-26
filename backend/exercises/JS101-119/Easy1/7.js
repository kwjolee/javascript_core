/*
input : two strings of different lengths
output : new string with short + long + short string
*/

function shortLongShort(str1, str2) {
  let result;
  if (str1.length > str2.length) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }

  return result;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"