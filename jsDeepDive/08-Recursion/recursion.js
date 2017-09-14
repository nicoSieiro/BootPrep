function factorialIterativo(num) {
  var sum = 1;
  for (var i=2; i<=num; i++) {
    sum = sum * i;
  }
  return sum;
}

function factorial(num, sum = 1) {
  if(num === 0) return sum;
  return factorial(num-1,sum*num);
}

function fib(num) {
  if (num === 0 || num === 1) return 1;
  return fib(num-1) + fib(num-2)
}

function factores(num, arr = [], i = 2) {
  if (i > num) return arr
  if (num%i === 0) {
    arr.push(i);
    num = num / i;
  } else {
    i++;
  }
  return factores(num,arr,i)
}