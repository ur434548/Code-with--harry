function greet(name, callback) {
  console.log("Your Name is " + name);
  setInterval(callback, 1000);
}

function ok() {
  let a = new Date();
  let d = a.getDay();
  let t = a.getHours();
  let h = a.getMinutes ();
  let s = a.getSeconds();
  console.log(d, t, h, s);
}
greet("usman", ok);
