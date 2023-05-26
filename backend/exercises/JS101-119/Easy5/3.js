/*
input : array of numbers
output : one array with nested two arrays, the input array split in half
  if input array length is odd, then first output array gets the middle element
*/

function halvsies(inputArr) {
  let firstHalf = inputArr.slice(0, Math.ceil(inputArr.length / 2));
  let secondHalf = inputArr.slice(Math.ceil(inputArr.length / 2));
  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]