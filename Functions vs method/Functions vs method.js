console.log("hi");
let sum = (a, b, callback) => {
  let tong = a + b;
  //   setTimeout(() => {
  //     callback(tong);
  //   }, 5000);//mili seconds
  let i = 0;
  let timer = setInterval(() => {
    callback(tong);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 1000);
};
printSum = (message) => {
  console.log("sum", message);
};
sum(6, 9, printSum);
