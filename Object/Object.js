let a = {
  name: "Xu",
  address: "HCM",
  phone: "0708079427",
  age: "3",
};
let b = "name";
a[b] = "Amie";
console.log(`kieu a`, typeof a, `kieu b`, typeof b);
console.log(`Ten: `, a["name"], `Tuoi:${a.age}`);
