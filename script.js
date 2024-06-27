let x = "usman";
let y = 12345;
console.log(x + y);
// question no 2
console.log(typeof (x + y));
// question  no 3
const person = {
  name: "usman",
  cnic: 3456689766,
  phn: 34456767,
  friend: "ok",
};
// question no 4
person["class"] = "bs-it";
console.log(person);
// question no 5
const dics = {
  name: "zuhaib",
  cnic: 34534534534,
  fathername: "Usman",
  address: "Jandiala road sheikhupura",
  class: "firt year",
};
console.log(dics);
dics["status"] = "Unmarried";
dics["work"] = "Job holder";

// operators
// expression contain one or two operands like(!true)
let e = 5;
let r = 9;
console.log("e+r=", e + r);
console.log("e-r=", e - r);
console.log("e*r=", e * r);
console.log("e/r=", e / r);
console.log("e%r=", e % r);
console.log("e**r=", e ** r);
console.log("++e=", e++);
console.log("e++=", ++e);
console.log("r++=", r++);
console.log("++r=", ++r);
console.log("e--=", e--);
console.log("--e=", --e);
console.log("r--=", r--);
console.log("--r=", --r);

// assingment operator
let c = 6;
let d = 7;
console.log((c += d));
console.log((c -= d));
console.log((c *= d));
console.log((c **= d));
console.log((c /= d));

// swtich statements
const shop = "electronics";
switch (shop) {
  case "garmenents":
    console.log("You are on Garmenents Shop");
    break;
  case "electronics":
    console.log("Good You Are on the Same Shop");
    break;
  case "home applainces":
    console.log("you are on home Appliances shop");
    break;
  default:
    console.log("Soory you are not te same location");
}

// find the age of a person lies between 10 and 20
let w = prompt("Whats your Age");
if (w > 10 && w < 20) {
  console.log("Congraluttion you are under 20");
} else {
  console.log("You are not in 10 and 20");
}
// Number is Divisible by 2 and 3
let number = prompt("enter your Number");
if (number % 2 == 0 && number % 3 == 0) {
  console.log("Your Number is Divisible by 2 and 3", number);
} else {
  console.log("Your number in not divisibke by 2 and 3");
}

// terninary opertor
let yourAge = prompt("Enter Your age");
yourAge > 18 ? "Drive" : "Not Drive";

// Loops in JS
let n = prompt("Enter Any Anumber To find the factorial");
n = Number.parseInt(n);
let factorial=1;
for (let i = 1; i <= n; i++) {
  factorial*= i;
  console.log( factorial);
}
