// function Reverse(items) {
//   let items1 = [1, 2, 34, 5];
//   console.log("No", items1.reverse());
//   let numberString = items1.join("");
//   let finalNo = Number(numberString);

//   console.log("finalNo", finalNo);

//   return finalNo;
// }
// let reverseNo = Reverse([12345]);

function Reverse(items) {
  console.log("ites", items);

  //   let No = String(items).split("").reverse().join("");

  let No = Number(items.toString().split("").reverse().join(""));
  console.log("No", typeof No);
}
let reverseNo1 = Reverse(123456);
