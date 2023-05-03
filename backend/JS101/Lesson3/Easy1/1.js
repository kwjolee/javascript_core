let numbers = [1, 2, 3];
numbers[6] = 5;

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
The first code will not raise an error.

When arrays are assigned values at an index position that is out of bounds of its current size, JavaScript does not throw an error.
Instead, the value is still assigned at that index position.
If there are index positions between the current maximum and the one that is being referenced, the indices in bewteen them are left empty. They are not assigned anything.

The second code will not raise an error either. It will return `undefined`. However this does not mean that the element at that index position is assigned `undefined`.
*/
