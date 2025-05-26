//Pure Fun =>  This function always returns the same output as given the same input parameters.
function Greek(a) {
  return a * 10;
}

// console.log(Greek(6));
let newResult = Greek(5);
console.log("new", newResult);

// Impure => Unpredicatble

let increment = 0;
function incrementFun(inc) {
  return inc + 1;
}
console.log("impure fun", incrementFun(2));
console.log("impure fun", incrementFun(3));
console.log("impure fun", incrementFun(4));
