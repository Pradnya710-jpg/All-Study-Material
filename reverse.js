function reverse(str) {
  let string = str.split("").reverse().join("");
  return string;
}

let reverseString = reverse("Pradnya How are You");

var str = "Pradnya How are You";

let reverseOutput = str.split(" ").map(function (Word) {
  return Word.split("").reverse().join("");
});
//console.log("reverseOutput", reverseOutput.join(" "));

function CheckObject(args) {
  console.log("args", args);

  //   console.log(">>>>>>>>>>>,", Array.isArray(args));
}

CheckObject([]);
CheckObject({});

let array = [2, 3, 4, 5, 6];
array.length = 0;
//console.log(".array", array);

let Num = 2.1;
// console.log(">>>>>>>>>", Number.isInteger(Num));

let array1 = [1, 2, 3, 4, 5, 6];
array1.push(...array1);
array1.concat(array1);

