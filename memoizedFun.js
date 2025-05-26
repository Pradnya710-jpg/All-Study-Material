const map = new Map();

function memoizedOne(fn) {
  return function memoized(...args) {
    console.log("arge", args);
    const key = args.join("_");

    if (map.has(key)) {
      console.log("getting from caches");

      return map.get(key);
    }
    const result = fn(...args);

    map.set(key, result);

    return result;
  };
}

function add(a, b) {
  return a + b;
}

//console.log(typeof result);
const memoizeResult = memoizedOne(add);
console.log(memoizeResult(1, 2));
console.log(memoizeResult(1, 2));
console.log(memoizeResult(1, 5));
