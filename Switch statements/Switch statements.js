console.log("hello world");
let day = "";
switch (new Date().getDay()) {
  case (day = "Monday"):
    console.log(`It's ${day}`);
    break;
  case (day = "Tuesday"):
    console.log(`It's ${day}`);
    break;
  case (day = "Wednesday"):
    console.log(`It's ${day}`);
    break;
  case (day = "Thursday"):
    console.log(`It's ${day}`);
    break;
  case (day = "Friday"):
    console.log(`It's ${day}`);
    break;
  case (day = "Saturday"):
    console.log(`It's ${day}`);
    break;
  default:
    console.log(`It's Sunday`);
    break;
}
