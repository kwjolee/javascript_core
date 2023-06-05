/* 13 minutes

PROBLEM
=====
input : array
output : array

rules:
output array is constructed by
  for each element value of input array
    count how many of the other element values are smaller than it
      if "other element value" occurs more than once
        count only once

EXAMPLES
=====
[8, 1, 2, 2, 3] => [3, 0, 1, 1, 2]
[1] => [0]

?? [] :: no

DATA STRUCTURE
=====
arrays

ALGORITHM
=====
declare function `smallerNumbersThanCurrent` with parameter `inputArr`

declare variable `outputArr` and init with empty array

iterate through every element of `inputArr`
  declare varaible `currNum` and init with current element of `inputArr`
  declare variable `restArr` and init with `inputArr` except for current element
    filter `restArr` to unique elements only :: helper
  count how many element of `restArr` are less than `currNum`
  add this count to the end of `outputArr`
end iteration

return `outputArr`

helper :: reduceArr
input : array, number (index)
output : array
take input array and remove element at number (index position)
then reduce to unique elements only
  order not sensitive
return reduced array
*/

function smallerNumbersThanCurrent(inputArr) {
  let outputArr = [];

  for (let ind = 0; ind < inputArr.length; ind += 1) {
    let currNum = inputArr[ind];
    let restArr = reduceArr(inputArr, ind);
    let count = restArr.filter(val => val < currNum).length;
    outputArr.push(count);
  }

  let outputArr2 = inputArr.map((currNum, ind) => {
    let restArr = reduceArr(inputArr, ind);
    let count = restArr.filter(val => val < currNum).length;
    return count;
  });

  return outputArr2;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

function reduceArr(arr, ind) {
  let arrCopy = arr.slice();
  arrCopy.splice(ind, 1);
  let outArr = [];
  for (let val of arrCopy) {
    if (!outArr.includes(val)) outArr.push(val);
  }
  return outArr;
}

