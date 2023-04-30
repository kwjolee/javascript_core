function greetings(arr, obj) {
  const fullName = arr.join(" ");
  const title = obj["title"];
  const occupation = obj["occupation"];
  return `Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);