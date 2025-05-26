function sumOfClousures() {
  let sum = 0;

  return function inner(num) {
    sum = sum + num;
    console.log("sum", sum);
  };
}

let result = sumOfClousures();

// result(5);

// console.log(".....", isAnagram("liste n", "silent")); //);
