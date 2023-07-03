console.log("Hello world!");
let array = ["hello", "world", "my", "home"];
for (let i = 0; i < array.length; i++) {
  console.log("checking ", i, array[i]);
  if (array[i] === "world") {
    console.log("Found it ", i, array[i]);
    break;
  }
}
