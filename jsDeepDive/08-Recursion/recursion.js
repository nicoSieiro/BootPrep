function factorialIterativo(num) {
    rsp = 1
    for (let i = 1; i <= num; i++) {
        rsp*=i
    }
    return rsp
}

function factorial(num) {
    if(num == 0){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

function fib(n) {
    if (n<=1) {
      return 1
    }else{
        return fib(n-1) + fib(n-2)
    }
}

function factores(n,i=2,array=[]) {
    if(n===1){
        return array
    }else if(!(n%i)){
        n = n/i
        array.push(i)
        console.log(array)
    }else{
        i++
    }
    return factores(n,i,array)
}


