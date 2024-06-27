// let marks = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 90];
// marks[10] = 94;
// console.log(marks, typeof marks);
// console.log(marks[10]);

// //  Arrays are Called Object
// let students = [
//   "Usman",
//   "Abdullah",
//   "Zeeshan",
//   "Abubakar",
//   "Asad",
//   "Aneeq",
//   "Anas",
//   "Bilal",
//   "Wahab",
//   "Zohaib",
//   "Rehman",
//   "Anees",
//   "Hamza",
// ];
// for (let name in students) {
//   console.log("name of Students is", students[name] + students);
// }

// //  Using for loop

// let studentName = [
//   "Usman",
//   "Abdullah",
//   "Zeeshan",
//   "Abubakar",
//   "Asad",
//   "Aneeq",
//   "Anas",
//   "Bilal",
//   "Wahab",
//   "Zohaib",
//   "Rehman",
//   "Anees",
//   "Hamza",
// ];
//  console.log (studentName.length);
// for (let i = 1; i <= studentName; i++) {
//   console.log("name of Students is", studentName[i] + studentName);
// }

//  Java script Array Methods
//   let us=[1,2,3,4,5,6];
//   console.log(us,typeof us);
//   let e=us.toString();  // convert array into strings
//   console.log(e, typeof e);

//   let y= us.join(" Hii i am done" + " Okie "); // add arrays
//   console.log(y);

//Arrays Push pop shift Or UnShift methods
// let p_o_p = [1, 2, 3, 4, 5, 6];
// console.log(p_o_p); //  Pop returns the same array
// let u = p_o_p.pop();
// console.log(p_o_p, u);

// //   push Method

// let pus_h = [2, 3, 4, 5, 6, 7, 8];
// console.log(pus_h); //Push returns the new Array
// let e = pus_h.push(12, 23, 23, 24, 556);
// console.log(pus_h, e);

// // shift method
// let yu = ["h", "j", "g", "f", "d", "s", "a"];
// console.log(yu, yu.shift()); // returns the same array
// console.log(yu);

// // unshift method
// let re = [2, 3, 4, 5, 6, 7, 8, 9, 9, 0];
// console.log(re, re.unshift(1)); // re turns the new Array

// // delete operator
// let w = [2, 3, 4, 5, 6, 7, 8, 9, 0];
// delete w[3];
// console.log(w);

//Concat Method

// let f = [1, 2, 3, 4, 5];
// let h = [6, 7, 8, 9, 10];
// let a = f.concat(h) ;
// console.log(a);

// console.log(f);
// console.log(h);



// sort method
// for ascending or decending order 
// we use comapre function
let comapre=(x,y)=>{
return x -y
}
let q=[11,2,55,44,667,965,353,1345,688,0,6,88,55,425]
console.log(q.sort(),q.slice(3,5), )
q.sort(comapre)
console.log(q)
q.splice(4,3,4343,34343,556666)
console.log(q)

