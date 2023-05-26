/*
1.
The `forEach` method is called on an array, whose elements are themselves arrays.
The callback function for the `forEach` method is defined.
It specifies one parameter named `'arr'`, meaning the method will iterate through each element of the calling array by declaring a variable named arr and initializing it with a value of each element.
The callback function outputs the first element of each element
Since a single line arrow function is used to declare the callback function, the return value of console.log is also returned at each iteration.
However, this return value is not used in any way.

2.
The `map` method is called on an array. This array has elements that themselves are arrays.
The callback function for the `map` method is defined in a single line using an arrow function syntax.
The function specifies one parameter, 'arr'. This means that each element of the array is what the variable arr is initialized with at each iteration.
On each iteration, console.log is used to output the first element of arr.
The return value of console.log at each iteration is then assigned as elements of a new array.
console.log always returns undefined. the new array then contains two undefined's.
That new array is what `map` returns.

3.
The `map` method is called on an array. The array contains two elements that themselves are arrays.
The callback function is defined using an arrow function syntax, which specifies one parameter 'arr'.
On each iteration, the local variable arr is declared and initialized with each element of the calling array.
The function outputs the first element of arr using console.log
then, the first element is returned by the callback function
`map` method creates a new array with each of its element being what is returned by the callback function at each iteration, then returns this new array.
so the code outputs 1 and 3, then returns a new array [1, 3]

4.
The value of myArr will always be undefined, because that is what the forEach method always returns.
The forEach method is called on an array that has two elements, which are themselves arrays.
The callback function of the forEach method specifies one parameter arr. This means the callback function will declare a local variable named arr and initialize it with each element of the calling array at each iteration.
The callback function returns the return value of calling the map method on arr.
the map method's callback function specifies one parameter, num.
num is assigned each element of arr.
if num is greater than 5, then map's callback function returns the return value of console.log, which is undefined
if num is not greater than 5, there is no explicit return value which means undefined will return as well
the difference is that if num is greater than 5, console.log will execute and output the value of num
so 18, 7, and 12 will output
the array that map returns is not used in any way

5.
the map method is called on an array, which has two elements that are themselves arrays.
the callback function specifies the parameter arr. the callback function will declare a local variable arr and initialize it with each element of the calling array at each iteration.
the map method creates a new array by assigning it an element that is the return value of the callback function
the callback function returns the return value of calling the map method on arr
this callback function returns each element passed in doubled.
so on the first iteration of the outer callback function, arr is [1, 2]
then the inner callback function returns [2, 4]
on the second iteration, arr is [3, 4]
then the inner callback function returns [6, 8]
the outer callback function then returns [[2, 4], [6, 8]]

6.
the filter method is called on an array with two elements, with each element being an object
the callback function of the method specifies a parameter object. at each iteration of the callback function, each element of the calling array is what object is initialized with
on first iteration, object is the first element object. on the second iteration, object is the second element object.
the callback function returns a return value of a chain of methods. let's break them down.
first, the list of keys of each object is returned as an array. then the every method is called on that array.
the every method returns true if its callback function evaluates to true for each element of the calling array it iterates through
the callback function of the every method is to see if the first character of the value of each key is equal to the key.
so for the first iteration, the first character of ant is equal to a, but the first character of elephant is not equal to b. since not both of these are true, the every method returns false
since every method returns false, this element is not kept.
on the second iteration, the first character of cat is c, and the first character of dog is d. since both are satisfied, every method returns true.
since every method returns true, this element is kept
the filter object then returns an array with only the elements that are kept
in this case, only the second element is kept. so what is returned is an array with one element, which is the second element of the calling array.

7.


*/
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]