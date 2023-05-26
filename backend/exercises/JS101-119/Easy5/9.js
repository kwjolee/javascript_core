/*
input : array of string representing type of vehicle
output : each element alongside number of occurrences
*/

function countOccurrences(list) {
  let outObj = {};
  for (let vehicle of list) {
    outObj[vehicle] = outObj[vehicle] + 1 || 1;
  }
  let myCars = Object.entries(outObj);
  for (let counts of myCars) {
    console.log(`${counts[0]} => ${counts[1]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2