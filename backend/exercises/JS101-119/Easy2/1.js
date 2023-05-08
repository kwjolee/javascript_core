function greetings(nameArray, titleObject) {
  let fullName = nameArray.join(" ");
  let title = titleObject["title"];
  let occupation = titleObject["occupation"];
  console.log(`Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.