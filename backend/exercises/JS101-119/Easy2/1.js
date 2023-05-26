/*
input : array and object
array will have 2 or more elements that join to make a person's name
object contains two keys with appropro values
*/
function greetings(nameArray, titleObj) {
  let fullname = nameArray.join(" ");
  let outString = `Hello, ${fullname}! Nice to have a ${titleObj.title} ${titleObj.occupation} around.`;
  return outString;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.