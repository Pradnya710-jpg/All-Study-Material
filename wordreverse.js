function wordSeqeunceRev(string) {
  let reverseStr = string.split(" ").reverse().join(" ");
  console.log("reverseStr", reverseStr);
}

wordSeqeunceRev("Hello World");

function removeExtraSpace(sentence) {
  let trimText = sentence.trim().replace(/\s+/g, " ");
  console.log("removeExtraSpace", trimText);
}

removeExtraSpace("  I am    Pradnya    Bedse ");

//count consonants

function countConsonants(string) {
  let consonantsArray = ["a", "e", "i", "o", "u"];
  let lowerCase = string.toLowerCase().replace(/\s/g, "").split("");
  console.log("lowerCase", lowerCase);

  let count = 0;

  lowerCase.map((ele) => {
    if (!consonantsArray.includes(ele)) {
      count += 1;
    }
  });
  return count;
}

let result = countConsonants("Hello World");
// console.log("result", result);

// function findLargestWord(sentence) {
//   let splitSentence = sentence.split(" ");
//   let count = 0;
//   let string = "";
//   splitSentence.map((ele) => {
//     if (ele.length > count) {
//       count = ele.length;
//       string = ele;
//     }
//   });
// }

function findLargestWord(sentence) {
  let splitSentence = sentence.split(/\s+/);
  console.log("splitSentence", splitSentence);

  const sortedWords = splitSentence.sort((a, b) => b.length - a.length);
  // console.log("sortedWords", sortedWords);
  // console.log("sortedWords", sortedWords[1]);
  let largestWord = sortedWords[0].length;
  for (let i = 0; i < sortedWords.length; i++) {
    if (largestWord > sortedWords[i].length) {
      return sortedWords[i];
    }
  }
}

let resultNew = findLargestWord("I Love Programming in Javascript Pradnya");

function findAnagrams(str1, str2) {
  function compareString(str) {
    let stringResult = str
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    console.log("stringResult", stringResult);
  }

  let firstString = compareString(str1);
  let secondString = compareString(str2);
  return firstString === secondString;
}

let checkAnagrams = findAnagrams("Listen", "Silent");

//console.log("checkAnagrams", checkAnagrams);

//Merge two Array

function mergeArray(arr1, arr2) {
  let mergeArray = arr1.concat(arr2).sort();
  console.log("mergeArray", mergeArray);
}

//merge sort

function mergeArraySort(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[j]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) mergedArray.push(arr1[i++]);
  while (j < arr2.length) mergedArray.push(arr2[j++]);

  console.log("mergedArray", mergedArray);
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 6, 8, 10];

mergeArraySort(array1, array2);
