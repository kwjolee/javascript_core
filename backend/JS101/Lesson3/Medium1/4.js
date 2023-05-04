function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let maxBufferSize = 5;

let newElement = 6;

let buffer = [1, 2, 3, 4, 5];

console.log(addToRollingBuffer2(buffer, maxBufferSize, newElement));
console.log(buffer);

console.log(addToRollingBuffer1(buffer, maxBufferSize, newElement));
console.log(buffer);

// console.log(addToRollingBuffer2(buffer, maxBufferSize, newElement));
// console.log(buffer);
