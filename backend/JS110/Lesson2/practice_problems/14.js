let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let outArr = Object.values(obj).map(subObj => {
  if (subObj.type === "fruit") {
    let out = subObj.colors;
    return out.map(color => color[0].toUpperCase() + color.slice(1).toLowerCase());
  } else {
    let out = subObj.size;
    return out.toUpperCase();
  }
});

console.log(outArr);