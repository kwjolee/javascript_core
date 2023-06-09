/* 12 minutes

PROBLEM
=====
input : two arrays
output : array

first input array has strings that may or may not be substrings of
  strings in second input array

output array contains strings of first input array that are
  substrings of strings in second input array
    and is sorted lexicographically

?? is a string a substring of itself

EXAMPLE
=====
["arp", "live", "strong"]
["lively", "alive", "harp", "sharp", "armstrong"]

[arp, live, strong]

tarp, mice, bull
lively, alive, harp, sharp, armstrong

[]

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `inArray` with parameters `array1` and `array2`

declare variable `substrings` and init with empty array

iterate through every string of `array1`
  iterate through every string of `array2`
    if string of array 1 is a substring of any string in `array2` :: helper
      add string of array 1 to `substrings` if it doesn't already exist
  end iteration
end iteration

sort `substrings` in lexicographical order

return the sorted `substrings`
*/

function inArray(array1, array2) {
  let substrings = [];

  for (let string1 of array1) {
    for (let string2 of array2) {
      if (isSubstring(string1, string2) && !substrings.includes(string1)) substrings.push(string1);
    }
  }

  return substrings.sort();
}

function isSubstring(substring, string) {
  if (substring === string) return true;
  return string.includes(substring);
}

/*
input : two strings
output : boolean
checks if first string is a substring of second string
*/