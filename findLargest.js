let array = [1, 5, 4, 3, 10, 1, 4, 20, 45, 60];

let uniqueArray = [...new Set(array)];

console.log("uniq", uniqueArray);

let largestNo = uniqueArray.sort((a, b) => b - a);
console.log("largestNo", largestNo[1]);
