//deep copy dont reflect the changes original
let originalObject = {
  name: "Pradnya",
  age: 20,
  gender: "female",
  details: {
    hobbies: "Badminton",
    city: "Pune",
  },
};
const deepCopy = structuredClone(originalObject);
deepCopy.details.city = "Dhule";
console.log("deepCopy", deepCopy);

const shallowCopy = { ...originalObject };

shallowCopy.details.hobbies = "Bat";
console.log("originalObject", originalObject);
