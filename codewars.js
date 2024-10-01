/*function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; ++i) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(10, 1));
console.log(countBy(2, 5));

function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }
  else {
    return n * m
  }

}
console.log(paperwork(10, 1));
console.log(paperwork(-5, 1));
console.log(paperwork(5, 5));*/

function litres(time) {
  var litrez = Math.floor(time * 0.5);
  if (litrez === 1) {
    return "1 litre";
  }
  else {
    return litrez + " litres";
  }
}

console.log(litres(3));
console.log(litres(6.7));