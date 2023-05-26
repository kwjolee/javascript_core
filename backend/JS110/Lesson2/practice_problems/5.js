let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

/*
total age of male members
*/
let totAge = Object.values(munsters).reduce((acc, val) => {
  if (val.gender === "male") {
    return acc + val.age;
  } else {
    return acc;
  }
}, 0);

console.log(totAge);