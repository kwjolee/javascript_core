let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

console.log(flintstones.flat());

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

console.log(flintstones);