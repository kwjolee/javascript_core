/* 8 minutes

PROBLEM
=====
input : two strings
  first string is the full text
  second string is the search text
output : number
  how many times search text appears in full text

rules:
?? 'bbb' vs 'bb', is this a 1 or 2? ==> 1
?? if search text is empty string   ==> 0

EXAMPLE
=====
'abcdeb', 'b' => 2
'abc', 'b' => 1
'abbc', 'bb' => 1

DATA STRUCTURE
=====
array

ALGORITHM
=====
declare variable `count` and init with 0

repeat//
replace the first occurrence of `searchtext` in `fulltext` with empty string
if old and new `searchtext` are same length
  stop
if different lengths
  increment `count` by 1
//repeat

return `count`
*/

function solution(fullText, searchText) {
  let count = 0;
  let prevFullText = fullText;
  let currFullText;

  while (true) {
    currFullText = prevFullText.replace(searchText, "");
    if (currFullText.length !== prevFullText.length) {
      count += 1;
    } else {
      break;
    }
    prevFullText = currFullText;
  }

  return count;
}

