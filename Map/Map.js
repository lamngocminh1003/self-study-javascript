let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * arr[i];
// }
console.log("check value", arr);
let mapArray = arr.map((item, index) => {
  return `<td>${item}-${index}</td>`;
});
console.log("check value", mapArray);
//different between map vs for is:
// map will copy your array and caculate new array
//and for will do at your array
