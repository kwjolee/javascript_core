/*
https://www.codewars.com/kata/5453dce502949307cf000bff/train/javascript
Not to brag, but I recently became the nexus of the Codewars universe! My honor and my rank were the same number. I cried a little.

Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

PROBLEM
=====
input : object
output : number

rules:
in the input array
  key is rank, value is honor
output the rank of the nexus

nexus is the user whose rank is closest to his honor
  "key" closest to "value"
  if rank === honor, then user is nexus
  if no exact match is found
    nexus is who is closest to being rank === honor
  if there is a tie
    nexus has lowest rank value/number

input object's keys are not necessarily listed in consecutive rank order
  ranks are numerical but will be in string form within objects

EXAMPLE
====

        
         rank    honor
users = {  1  =>  93,
          10  =>  55,
          15  =>  30,
          20  =>  19,    <--- nexus
          23  =>  11,
          30  =>   2 }
return 20

DATA STRUCTURE
=====
object, arrays

ALGORITHM
=====
declare function `nexus` with parameter `userInfo`

declare variable `ranks` and init with properties of `userInfo`
declare variable `honors` and init with values of `userInfo`

declare varaible `candidate` and init with [Infinity, Infinity] // [rank, diff]

iterate through every index position of `ranks`
  declare variable `rank` and init with element of `ranks` at current index
  declare variable `honor` and init with element of `honors` at current index
  declare variable `diff` and init with absolute difference between `rank` and `honor`
  if `diff` is 0:
    and if `rank` is less than the first value of `candidate`
      create array [`rank`, `diff`] and reassign `candidate` with this
  if not:
    compare `diff` with second value of `candidate`
      if `diff` is less than second value of `candidate`
        create array [`rank`, `diff`] and reassign `candidate` with this
      if `diff` is the same as the second value of `candidate`
        if `rank` is less than the first value of `candidate`
          create array [`rank`, `diff`] and reassign `candidate` with this
end iteration
*/

function nexus(userInfo) {
  let ranks = Object.keys(userInfo);
  let honors = Object.values(userInfo);

  let candidate = [Infinity, Infinity];

  for (let ind = 0; ind < ranks.length; ind += 1) {
    let rank = Number(ranks[ind]);
    let honor = honors[ind];
    let diff = Math.abs(rank - honor);

    console.log({rank, diff, olddiff: candidate[1]})

    if (diff < candidate[1]) {
      candidate = [rank, diff];
    } else if (diff === candidate[1]) {
      if (rank < candidate[0]) {
        candidate = [rank, diff];
      }
    }
  }

  return candidate[0];
}

let userInfo = { '1': 89,
'2': 55,
'3': 49,
'4': 48,
'5': 26,
'6': 12,
'7': 11,
'8': 10,
'9': 10,
'10': 9,
'11': 8,
'12': 8,
'13': 7,
'14': 6,
'15': 4,
'16': 4,
'17': 3,
'18': 2,
'19': 1,
'20': 1,
'21': 1,
'22': 1,
'23': 0 };

console.log(nexus(userInfo)); // 3
