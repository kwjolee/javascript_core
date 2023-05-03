let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newString = 
munstersDescription.split(" ").map(function (word, ind) {
                    if (ind === 0) {
                      return word[0].toUpperCase() + word.slice(1).toLowerCase();
                    } else {
                      return word.toLowerCase();
                    }
                   }).join(" ");

console.log(newString);
