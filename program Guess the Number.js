let randomNumbers = Math.floor(Math.random() * 100);
console.log(randomNumbers);

  let n = prompt("Enter the Matching Number between 1 and 100");
  console.log(n);

while (n != randomNumbers) {
  n=prompt("enter the same number");
  if (n == randomNumbers) {
    console.log("Good you entered the correct Number");
} else if (n > randomNumbers) {
  console.log("your entered number is  "+ n +"  greator then the random number " );
} else if (n < randomNumbers) {
  console.log("your entered number is  "+ n +"  less  random number");
} else {
  console.log("You lost");
}
}