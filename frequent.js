function frequent(arr) {
  let noCoount = 0;
  let newArray = [];
  let occurance = {};
  let mostFrequent = null;
  arr.map((ele) => {
    if (newArray.includes(ele)) {
      occurance[ele]++;
    } else {
      newArray.push(ele);
      occurance[ele] = 1;
    }
    console.log("ocur", occurance[ele]);

    if (occurance[ele] > noCoount) {
      noCoount = occurance[ele];
      mostFrequent = ele;
    }
  });

  console.log(
    `Most frequent number is ${mostFrequent}, appearing ${noCoount} times.`
  );
}

frequent([1, 2, 3, 4, 5, 3, 2]);

// function frequent(arr) {
//   let noCoount = 0;
//   let newArray = [];
//   let occurance = {};
//   arr.forEach(function (ele) {
//     if (occurance.hasOwnProperty(ele) === false) {
//       occurance[ele] = 1;
//     } else {
//       occurance[ele]++;
//     }
//   });
//   console.log("no", occurance);
// }

// frequent([1, 2, 3, 4, 5, 5, 3, 2]);
