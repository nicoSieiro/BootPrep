function setPropsOnObj(obj) {
    var plataforma, p, proximo,es
    var la = {}
    var clave = {}
    var secreta = {}

    obj.p = 5
    obj.plataforma = 5
    obj.proximo = function (num) {
        return num+1
    }
    obj.la = clave
    obj.la.clave = secreta
    obj.la.clave.secreta = {es:404}

    var uno = obj[p]
    var dos = obj[plataforma]
    var tres = obj[proximo]
        return uno, dos, tres;
}

function setPropsOnArr(array){
    array.hola = function(){
        return "Hola!"
    }
    array["river"] = "plate"
    array.push(5)
    array["doble"] = function(n){
        return n*2
    }
}

function setPropsOnFunc(fn){
    fn.year = "2017"    
    fn.mitad = function(n){
        return n/2
    }
    fn.prototype.helloWorld = function(){
        return "Hello World"
    }
}

