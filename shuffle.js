function shuffle(array) {
  // console.log(array)
  //   let currentIndex = array.length;
  //   //console.log(currentIndex);
  //   //   while (currentIndex != 0) {
  //   //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //   //     // currentIndex--;
  //   //     [array[currentIndex], array[randomIndex]] = [
  //   //       array[randomIndex],
  //   //       array[currentIndex],
  //   //     ];
  //   //   }
  //   //   console.log("newArray", array);
  //   let newArray = array.sort(() => Math.random() - 0.5);
  //   return newArray;

  let copy = [];
  let originalArray = [...array];
  while (originalArray.length > 0) {
    let randomeIndex = Math.floor(Math.random() * array.length);

    let item = originalArray.splice(randomeIndex, 1)[0];

    copy.unshift(item);
  }
  console.log(array);
  return copy;
}

console.log(shuffle([1, 2, 3, 4, 5]));
