// enter any Number to add into the array
// pratice 1
// let u = prompt("Enter Any Number ");
// u = Number.parseInt(u);
// let marks = [93];
// marks.push(u);
// console.log(marks);

// // pratice 2
// //  enter the number untill it equal to th zero
// let number = [2, 3, 4, 5, 6, 7, 8];
// let n;
// while (n !== 0) {
//   n = prompt("Enter any Number");
//   n = Number.parseInt(n);
//   number.push(n);
// }
// console.log(number);

// // Pratice 3 filter method
// let fier = [20, 30, 40, 50, 74, 85, 20, 14, 65, 28];
// let i = fier.filter((a) => {
//   return a % 10 == 0;
// });
// console.log(fier);
// console.log(i);

// // pratice 4
// let square = [2, 3, 4, 5, 6, 7];
// let sqre = square.forEach((a) => {
//   console.log(a ** 2);
// });
// console.log(square);

//  Factorial Finder Code

let factorial = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let yu = factorial.reduce((a, b) => {
  return a*b;
});
console.log(yu);
