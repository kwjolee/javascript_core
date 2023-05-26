function makeUUID() {
  // 8-4-4-4-12 :: 0-9, a-f
  let uuid = [];
  [8, 4, 4, 4, 12].forEach(length => {
    uuid.push(subUUID(length));
  });
  return uuid.join("-");
}

function subUUID(length) {
  let subid = "";
  const chars = "0123456789abcdef";
  let count = 0;
  while (count < length) {
    let randInd = Math.floor(Math.random() * 16);
    subid += chars[randInd];
    count += 1;
  }
  return subid;
}

console.log(makeUUID());
