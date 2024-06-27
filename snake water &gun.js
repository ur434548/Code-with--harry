let randomNumbers = Math.floor(Math.random() * 3);
console.log(randomNumbers);
let n = prompt("Enter the One Character S,V & G");
console.log(n);

if (n == randomNumbers) {
  alert("You Win ");
} else {
  alert("youlose");
}
