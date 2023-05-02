function halvsies(array) {
  const firstHalf = [];
  const secondHalf = [];

  for (let ind = 0; ind < array.length; ind += 1) {
    if (ind < array.length / 2) {
      firstHalf.push(array[ind]);
    } else {
      secondHalf.push(array[ind]);
    }
  }

  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]