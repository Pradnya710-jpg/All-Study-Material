let allData = [
  {
    key: "Sample1",
    data: "Data1",
  },
  {
    key: "Sample1",
    data: "Data1",
  },
  {
    key: "Sample2",
    data: "Data2",
  },
  { key: "Sample1", data: "Data1" },
  {
    key: "Sample3",
    data: "Data1",
  },
  { key: "Sample4", data: "Data1" },
];

let output = {};

allData.forEach((ele) => {
  if (!output[ele.key]) {
    output[ele.key].push(ele);
  } else {
    output[key] = ele;
  }
});
//console.log("output", output);
