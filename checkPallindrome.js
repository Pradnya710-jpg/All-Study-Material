function CheckPallindrome(str) {
  let reverseString = str.split("").reverse().join("");
  console.log("reverseString", reverseString);
  if (str == reverseString) {
    console.log("The string is Pallindrome");
  } else {
    console.log("String is not pallindrom");
  }
}
CheckPallindrome("Nayan");

// Write  fun that returns a passed string with letter alphabetical order

function AlphaOrder(str) {
  let assOrder = str.toLowerCase().split("").sort().join("");
  return assOrder;
}

console.log("AlphaOrder", AlphaOrder("Pradnya"));

function ConvertAlpha(word) {
  let firstLetters = word.split(" ");

  let capitalLetter = word.charAt(0).toUpperCase() + word.substring(1);

  let firstLettersResult = firstLetters
    .map((ele) => ele.charAt(0).toUpperCase() + ele.substring(1))
    .join(" ");
  console.log("firstLettersResult", firstLettersResult);
}

ConvertAlpha("hello i am pradnya");
