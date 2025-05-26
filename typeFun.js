function typeShow(args) {
  return typeof args;
}

let argsResult = typeShow(3);
// console.log("argsResult", argsResult);

function retrives(...args) {
  console.log("args[0].length", args[0].length);

  if (args[0].length > args[1]) {
    let firstEle = args[0].slice(-args[1]);
    console.log("firstEle", firstEle);

    return firstEle;
  }
  return undefined;
}

console.log(">>>>>>>>>>>ans", retrives([1, 2, 3, 4, 5], 4));
