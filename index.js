//map
//Your implementation should expect a source array and a function. All the tests will pass an Array and a block.

function map(src, callback) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    let theElement = src[i];
    r.push(callback(theElement));
  }
  return r;
}

function reduce(src, cb, starting) {
  let r = !!starting ? starting : src[0];
  let i = !!starting ? 0 : 1;

  for (; i < src.length; i++) {
    r = cb(src[i], r);
  }

  return r;
}
