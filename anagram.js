function isAnagram(str1, str2) {
  const sanitize = (str) =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return sanitize(str1) === sanitize(str2);
}

function nonRepeatingAlpha(str) {
  let obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let alphabet in obj) {
    if (obj[alphabet] === 1) {
      return alphabet;
    }
  }
  return false;
}

// console.log(nonRepeatingAlpha("aabbcc"));

function findAnagramsSeparate(setence) {
  let obj = {};
  let newString;

  setence.forEach((ele) => {
    newString = ele.toLowerCase().split("").sort().join("");

    if (obj[newString]) {
      obj[newString].push(ele);
    } else {
      obj[newString] = [ele];
    }
  });
  return Object.values(obj);
}

// findAnagramsSeparate(["eat", "tea", "tan", "ate", "nat", "bat"]);

// console.log(findAnagramsSeparate(["eat", "tea", "tan", "ate", "nat", "bat"]));

function rotateArray(arr, rotate) {
  //   if (rotate <= 0) return arr;
  //   const last = arr.pop();
  //   arr.unshift(last);

  //   return rotateArray(arr, --rotate);
  for (let i = 0; i < rotate; i++) {
    let remove = arr.pop();
    arr.unshift(remove);
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));

function captitalLetter(str) {
  let newArray = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  // let firstLettersResult = newArray
  //   .map((ele) => ele.charAt(0).toUpperCase() + ele.substring(1))
  //   .join(" ");
  console.log("firstLetter", newArray);
}

captitalLetter("Pradnya bedse");
