function duplicar(n){
    return n*2
}

function map(array,duplicar) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        num = duplicar(array[i])
        newArray.push(num)
    }
    return newArray
}

function filter(array,fn) {
   arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === true) {
            arrayPar.push(array[i])
        }
    }
    return arrayPar
}

function contains(obj,num){
    if (Array.isArray(obj) === true) {
        for (let i = 0; i < obj.length; i++) {
            if(obj[i] === num){
                return true
            } 
        }
    } else {
        for (var i in obj) {
            if (obj[i] === num) {
                return true
            }
        }
    }
    return false
}

function cuentaPalabras(string) {
    res = string.split(" ")
    return res.length
}

function reduce(array,num,fn){
    for (let i = 0; i < array.length; i++) {
        num = fn(array[i],num)
    }
    return num
}

function cuentaPalabrasReduce(vt,array){ 
    return array+cuentaPalabras(vt)
}

function sumar(a,b) {
    return a+b
}

function suma(array){
    return reduce(array,0,sumar)
}

function every(array,fun){
    newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
        if(reduce(newArray,0,fun) === false){
            return false
        }
    }
    return true     
}

function any(array,fn){
    newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
        if(reduce(newArray,0,fn) === true){
            return true
        }
    }
    return false 
}
