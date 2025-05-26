//when we want resume and start the excution

// function* asyncTask() {
//   console.log("Task1");
//   yield new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task2"), 100;
//     });
//     console.log("Task3");
//   });
// }

// const task = asyncTask();
// console.log("task", task);
// task.next().value.then(console.log);
// task.next();

// function* generatorFun() {
//   yield "Pradnya";
//   yield "World";
//   let a = 10;
//   yield a;
//   return "Done";
// }
// const generator = generatorFun();
// console.log("generator", generator);

// console.log("generator calling", generator.next().value);
// console.log("generator calling", generator.next());
// console.log("generator calling", generator.next());
// console.log("generator calling", generator.next());

function* infinteLoop() {
  let i = 0;
  while (i <= 5) {
    yield i++;
    // i++;
  }
}
// let generatorNew = infinteLoop();
// console.log("generator calling", generatorNew.next());
// console.log("generator calling", generatorNew.next());
// console.log("generator calling", generatorNew.next());
// console.log("generator calling", generatorNew.next());
// console.log("generator calling", generatorNew.next());
// console.log("generator calling", generatorNew.next());

let isEvenOrOdd = (no) => {
  console.log("");

  if (Number.isInteger(no / 2)) {
    console.log(".......No is Even");
  } else {
    console.log(".......No is Odd");
  }
};

isEvenOrOdd(10);
isEvenOrOdd(3);
isEvenOrOdd(5);
