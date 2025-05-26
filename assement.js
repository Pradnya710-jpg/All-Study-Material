// function calculateBrackets(str) {
//   console.log("....str", str);
//   let opensqr = 0;
//   let openround = 0;
//   let opencurly = 0;
//   for (let index = 0; index < str.length; index++) {
//     const ele = str[index];
//     if (ele === "[") {
//       opensqr = opensqr + 1;
//     } else if (ele === "]") {
//       opensqr = opensqr - 1;
//     }
//     if (ele === "(") {
//       openround = openround + 1;
//     } else if (ele === ")") {
//       openround = openround - 1;
//     }
//     if (ele === "{") {
//       opencurly = opencurly + 1;
//     } else if (ele === "}") {
//       opencurly = opencurly - 1;
//     }
//   }

//   if (opensqr && openround && opencurly === 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// console.log("..........", calculateBrackets("[a(b(c)(d{123})]"));

function balanceStr(str) {
  const stack = [];
  let brackets = {
    "(": "(",
    "[": "]",
    "{": "}",
  };
  for (let symb of str) {
    if (symb === "(" || symb === "[" || symb === "{") {
      stack.push(symb);
      console.log("symb", symb);
    } else if (symb === ")" || symb === "]" || symb === "}") {
      if (stack.length === 0 || stack.pop() !== brackets[symb]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balanceStr("{[()]}")); // true
