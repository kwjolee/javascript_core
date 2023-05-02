function countOccurrences(array) {
  let list = {};
  for (let carType of array) {
    list[carType] = list[carType] + 1 || 1;
  }
  for (let carType in list) {
    console.log(`${carType} => ${list[carType]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);