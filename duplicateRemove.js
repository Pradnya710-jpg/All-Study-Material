// Implement a function to remove duplicates from an array:

function removeDuplicates(array) {
  let removeDuplicates = [...new Set(array)];
  console.log("removeDuplicates", removeDuplicates);

  let uniqueArray = [];
  let result = {};

  array.forEach((ele) => {
    if (result[ele] === ele) {
    } else {
      result[ele] = ele;

      uniqueArray.push(ele);
    }
  });
  console.log("uniqueArray", uniqueArray);
}

// removeDuplicates([1, 2, 3, 4, 5, 6, 6, 4]);

//Longest Substring

function longestSubsequence(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let current = "";

    for (let j = i; j < s.length; j++) {
      if (current.includes(s[j])) {
        break; // found a duplicate
      }
      current += s[j]; // add to substring
    }

    maxLength = Math.max(maxLength, current.length);
  }

  return maxLength;
}

// console.log(longestSubsequence("abcabdcbb"));

function longestSubsequenceFind(str) {
  str = str.split("");
  let newSubstring = [];
  let countMax = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    while (newSubstring.includes(char)) {
      newSubstring.shift();
    }
    newSubstring.push(char);

    countMax = Math.max(countMax, newSubstring.length);
  }

  return countMax;
}
console.log(longestSubsequenceFind("abcabdcbb"));
