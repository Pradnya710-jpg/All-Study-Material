function LognestWord(sentence) {
  if (sentence.length === 0) return false;

  const punctuations = [",", "!", ".", "?", ";", ":"];

  // Replace punctuation manually
  let cleanSentence = sentence;

  punctuations.forEach((char) => {
    cleanSentence = cleanSentence.split(char).join("");
  });
  console.log("punctuations", cleanSentence);

  const LognestWord = sentence.split(" ");

  let longest = "";
  LognestWord.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

console.log(
  ">>>>>>>>>",
  LognestWord(
    "Watch Thapa technical javascript awesomejsin100days course on youtube "
  )
);
