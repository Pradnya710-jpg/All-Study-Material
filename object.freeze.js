let data = {
  a: 20,
  b: 30,
};
// Object.freeze(data);
console.log(">.......before", data);

data.a = 200;
Object.seal(data);
data.c = "Pradnya";

console.log(">.......after", data);
