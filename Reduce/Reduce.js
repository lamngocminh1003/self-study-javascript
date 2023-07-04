let arr = ["Amie", "Tom", "Elsa", "Sam", "Barry"];
arr.sort();
console.log("check sort:", arr);
let arr1 = [1, 22, 3, 45, 2, 67, 23, 56, 24];
let arr2 = [];
arr1.sort((a, b) => {
  if (a > b) {
    arr2.push(a);
    console.log("check arr2", arr2);
  }
  return a - b;
});
console.log("check sort:", arr1);
