// 6 minutes no PEDAC
function wave(str) {
  let outArr = [];
  for (let ind = 0; ind < str.length; ind += 1) {
    if (str[ind] === " ") continue;
    let stand = str.slice(0, ind).toLowerCase() + str[ind].toUpperCase() + str.slice(ind + 1).toLowerCase();
    outArr.push(stand);
  }
  return outArr;
}

console.log(wave("Two words"));
