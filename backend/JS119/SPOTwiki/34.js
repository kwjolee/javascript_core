// 4 minutes no PEDAC

function findSuspects(pockets, allowedItems) {
  let suspects = Object.keys(pockets);
  let list = [];
  for (let name of suspects) {
    let contents = pockets[name];
    for (let item of contents) {
      if (allowedItems.includes(item)) continue;
      if (!list.includes(name)) list.push(name);
    }
  }
  if (list.length === 0) return null;
  return list;
}

let pockets = {
  bob: [1],
  tom: [2, 5],
  jane: [7]
};

console.log(findSuspects(pockets, [1, 7, 5, 2]));