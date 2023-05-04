let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);

// this will ransack the family data
// the object passed into messWithDemographics passes by reference
// so the local variable demoObject points to the same object that the global munsters is pointing to
// in the program, the values of this object are iterated through, which are objects of their own
// these subobjects in demoOBject and munsters are not copies, but rather also point to the same subobjects
// when these subobjects are mutated, the changes are reflected in the global munsters variable as well
