function sumTo1(x) {
  let sum = 0;

  for (let i = 0; i <= x; i++) {
    sum += i;
  }

  return sum;
}

function recSum(x) {

  if(x == 1) {
    return x;
  } else {
    return x += recSum(x - 1);
  }

}

console.log(recSum(3));