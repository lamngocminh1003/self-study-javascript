console.log("hihi");
let arr = [
  {
    name: "Amie",
    age: 21,
  },
  {
    name: "Khương",
    age: 26,
  },
  {
    name: "Giang",
    age: 26,
  },
  {
    name: "Linh",
    age: 24,
  },
  {
    name: "Tùng",
    age: 26,
  },
];
let filter = arr.filter((item, index) => {
  //   console.log("check index", index, "check item", item);
  return item && item.age === 26;
});
//different between find and filter is :
//filter when not having item. It exports a empty array, anh when having item it exports array about list items
// find when not having item. It exports UNDEFINED and when having item it exports only item when it find first
console.log("check filter", filter);
let find = arr.find((item, index) => {
  //   console.log("check index", index, "check item", item);
  return item && item.age === 26;
});
console.log("check find", find);
