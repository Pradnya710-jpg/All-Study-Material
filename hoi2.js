// let string = "pradnya";

// let newString = string.charAt(0).toUpperCase();
// let lastString = string.charAt(6).toUpperCase();

// let newStringResult = newString + string.slice(1, 6) + lastString;

// console.log(Math.min(...array));

// function maxNumber(array) {
//   console.log("array", array);

//   let Maxno = 0;
//   array.map((ele) => {
//     if (Maxno < ele) {
//       Maxno = ele;
//     } else {
//       console.log("in the else");
//     }
//   });
// }

// let array = [1, 10, 24, 15, 20];

// maxNumber(array);

// function countLetters(string) {
//   let letters = {};
//   var count = {};
//   let stringResult = string.split("");
//   console.log("stringResult", stringResult);

//   stringResult.forEach((ele) => {
//     if (letters[ele]) {
//       letters[ele] += 1;
//     } else {
//       letters[ele] = 1;
//     }
//   });
//   console.log("leeters", letters);
// }

// let letters = ["p", "q", "r", "p", "r", "t"];

// countLetters("javascript");

function reverse(str) {
  let newStr = str.split("");
  let reverseString = newStr.reverse().join("");
  console.log("reverseString", reverseString);
}

reverse("developer");

function duplicates(numbers) {
  let duplicatesNo;
  // duplicatesNo = [...new Set(numbers)];
  // console.log("duplicatesNo", duplicatesNo);

  let newArray = [];
  numbers.forEach((ele) => {
    if (newArray.includes(ele)) {
    } else {
      newArray.push(ele);
    }
  });
  console.log("newArray", newArray);
}

duplicates([1, 2, 2, 3, 4, 4]);

function checkMostRepeatedWord(array) {
  let count = {};
  let maxValue = "";
  let maxKey = "";
  for (const word of array) {
    count[word] = (count[word] || 0) + 1;
    console.log("count", count[word]);
    if (count[word] > maxValue) {
      maxValue = count[word];
      maxKey = word;
    }
  }
  console.log("Highest letter is:", maxKey);
}

// checkMostRepeatedWord(["a", "b", "a", "c", "a", "b"]);

let findLongestWord = (string) => {
  let newStr = string.split(" ");

  let newArray = "";
  newStr.map((ele) => {
    if (ele.length > newArray.length) {
      newArray = ele;
    }
  });
  console.log("newArray", newArray);
};

let newArray = findLongestWord(
  "The quick brown fox pradnya jumps over the lazy on"
);

var nameNew = 2024;
console.log(">>>>>>>>>name", nameNew + 1);
