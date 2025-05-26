function Human(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  // return `hello ${this.name} ${this.lname} `;
}

let person = {
  name: "Pradnya",
  lname: "Bede",
};
let body = new Human("Pradnya", "Bedse");
console.log("body", body);
let parts = Human.call(person, "Hey", "!");
console.log("............", parts);
