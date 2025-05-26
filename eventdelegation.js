// let child = document
//   .getElementById("btn1")
//   .addEventListener("click", function () {
//     alert("Button 1 clicked!");
//   });
// let child1 = document
//   .getElementById("btn2")
//   .addEventListener("click", function () {
//     alert("Button 2 clicked!");
//   });
// let child2 = document
//   .getElementById("btn3")
//   .addEventListener("click", function () {
//     alert("Button 3 clicked!");
//   });

// document.getElementById("Parent").addEventListener("click", function (event) {
//   console.log("event", event.target.tagName);

//   if (event.target.tagName === "Button") {
//     alert(`${event.target.textContent} clicked!`);
//   }

// });

let button1 = document
  .getElementById("btn1")
  .addEventListener("click", function (event) {
    const para = document.createElement("h1");
    para.innerHTML = "Hello Button";
    document.body.appendChild(para);
  });
console.log("buuton`", button1);
