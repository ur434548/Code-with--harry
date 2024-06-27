// map method 
// it creates a new array for perfoming operations on each array element
//  let arr=[
//     {
//         Name:"Usman",
//         Father_name:"Rehman",
//         Email:"usman.gcy63262gmail.com",
//         Phone_number:315464389,
//         Cnic:354045548510,
    
    
//         Name:"Bilal",
//         Father_name:"Rehman",
//         Email:"usman.gcy63262gmail.com",
//         Phone_number:315464389,
//         Cnic:354045548510,
    
    
//         Name:'Usman',
//         Father_name:"Rehman",
//         Email:"usman.gcy63262gmail.com",
//         Phone_number:315464389,
//         Cnic:354045548510,
    
    
//         Name:"Usman",
//         Father_name:"Rehman",
//         Email:"usman.gcy63262gmail.com",
//         Phone_number:315464389,
//         Cnic:354045548510,
//     }
//  ]
// arr.map((index,array)=>{
//     console.log(index,array)
   
// })



// Array Filter Method
//it does not changes the default array
let mark=[11,12,23,45,43,21,45,65,31,16]
let marks=[1,2,34,5,6,78,9,76,43,75,12,22]
let marks2=[4,55,24,24,241,64,14,83,741,75,34]
let marks3=[1,475,2475,7781,7854,7,2,8,1,5,48,5]

let newArray= mark.filter((value)=>{
    return value>20
})
console.log(newArray) // It is used to filter the value 

// reduce method
let arry=[52,7,8,1,7,9,1,7]
let b=arry.reduce((a,b)=>{
    return a+b
})
console.log(b,arry)
// map foreach or filter method contain function