function CalculateOccurance(word) {
  let letterCount = {};
  let wordResult = word.toLowerCase().split("");
  let letterOccur;

  wordResult.forEach((char) => {
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  });
  for (const letter in letterCount) {
    console.log(`${letter} → ${letterCount[letter]}`);
  }
}

// CalculateOccurance("Pradnyaa");

// using hasOwnProperty

function CalculateOccuranceWord(word) {
  let occurance = {};
  let wordResult = word.toLowerCase().split("");
  wordResult.forEach(function (ele) {
    if (occurance.hasOwnProperty(ele) === false) {
      occurance[ele] = 1;
    } else {
      occurance[ele]++;
    }
  });
  console.log(occurance);
}

CalculateOccuranceWord("Hello");

let result = 0;
function calcuateNo(array) {
  array.forEach((ele) => {
    if (typeof ele === "number") {
      result = ele + result;
    }
  });
  console.log("result", result);
}

calcuateNo(["Pradnya", 3, 4, 2, "Prad"]);
