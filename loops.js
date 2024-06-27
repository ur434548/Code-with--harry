// For Loops Pratice
for (let i = 0; i < 90; i++) {
  console.log("congratulations Your Loop is Woking" + i);
}

// for in loop
// It is used to Access  the keys of objects
let person = {
  name: "usman",
  email: "usman",
  phnno: "usman",
  email: "usman",
  address: "usman", 
};
for( let usman in person){
  console.log( "Keys of " + usman + " are " + person[usman]);
}


// For Of loop
// It is used to access the values of obj
// for( let u of person){
//   console.log( "Keys of " + u + " are " + person[u]);
// }
//  While Loops
let n=7;
let i=0;
while(i<n){
  console.log(i);
  i++;
}



// Do while loop
let y=3;
let e=0;
do{
  console.log(y);
  e++;
}
while(e<y);

