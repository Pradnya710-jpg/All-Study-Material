// console.log(false == [[0]])

// function add(a,b){

//     return a +b
// }

// console.log(add(1,2,3,4))

// // console.log(["1",'10','100'].map(parseInt))

// var foo = '3'
// function showName(){
//     foo = '4'
//     return;
//     function foo(){}
// }

// showName()
// console.log("<<<<<<<<<<<<<",foo);

// function fetch(){
//     a = 7
//     console.log("a",a);
// }
// let a;
// fetch()

let obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

// let ans = obj.sum.bind(obj);
// console.log("an", ans());
let ans = obj.sum();

const arr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

//o/p => {0:"a",1:"b",2:"c"}

let object = arr.reduce((pre, curr, id) => ({ ...pre, [id]: curr }), {});
console.log("ob", object);
