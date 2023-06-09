// 1 minute no PEDAC

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  return names.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
}