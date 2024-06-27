const studentMarks = {
  Usman: 90,
  Furqan: 98,
  AliHamza: 94,
  Bilal: 93,
  Ehtisham: 30,
};
for (let student in studentMarks) {
  console.log(student + studentMarks[student]);
}
// question no 2
let i = 6;
for (let marks = 1; marks < i; marks++) {
  console.log(marks);
}

// question no 3
let e=6;
let n;
while(e!=n){
    n=prompt("Enter the same number");
}
console.log("You entered the Correct Value");


// Function to find the means of any number
const means=(a,b ,c,d,e)=>{
    let n=5;
    return (a+b+c+d+e)/n;
}
console.log(means(3,4,5,6,7));



