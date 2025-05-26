var targetObeject = {
  phone: "7089765431",
};
var sourceObject = {
  name: "Pradnya",
  age: 30,
  course: "Node js",
};
let assignData = Object.assign(sourceObject, targetObeject);
console.log("assigne", assignData);
console.log("targetObeject", targetObeject);
console.log("source", sourceObject);
