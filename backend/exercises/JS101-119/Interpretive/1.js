/* 13 minutes

PROBLEM
=====
input : number (represents number of switches)
output : array of numbers (represents the switch numbers that are on)

rules :
all lights are initially off
at `nth` pass, every `nth` switch is flipped
  at 1 pass, every 1 switch is flipped
  at 2 pass, every 2 switch is flipped
  ...
until `input number` passes have been done

EXAMPLE
=====
5 => [1, 4]
100 => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

DATA STRUCTURE
=====
array

ALGORITHM
=====
declare function `lightsOn` with parameter `switches`
declare variable switchStatus and init with array of `false` that is `switches` elements long

*/

function lightsOn(switches) {
  let switchStatus = [];
  for (let ind = 0; ind < switches; ind += 1) {
    switchStatus.push(false);
  }

  for (let pass = 1; pass <= switches; pass += 1) {
    for (let ind = pass - 1; ind < switches; ind += pass) {
      switchStatus[ind] = !switchStatus[ind];
    }
  }

  let onLights = switchStatus.map((val, ind) => {
    if (val) return ind + 1;
    return false;
  });

  return onLights.filter(val => val);
}

console.log(lightsOn(5));