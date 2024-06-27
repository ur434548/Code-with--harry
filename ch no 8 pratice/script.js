// document.querySelectorAll("#button");
let a = document.getElementById("btn-1");
a.addEventListener("click", () => {
 
  let a = new Date();
  let d = a.getDay();
  let h = a.getHours();
  let m = a.getMinutes;
  let s = a.getSeconds();
  let clock = setInterval(() => {
    document.write(a, 30000);
  });
});
