function concatenar(){
    var join = ""
    for (let i = 0; i < arguments.length; i++) {
       join += arguments[i]     
    }
    return join
}

function invocarFunciones() {
    var rsp = ""
    for (let i = 0; i < arguments.length; i++) {
       rsp += arguments[i]()
    }
    return rsp
}

function creadorDeIncrementos(){
    return function(num){
        return num + 2
    } 
}

function invocacionUnica(func){
    var a = false 
    return function (){
        if (!a) {
            func()
        }a = true
    }
}

function objetoConClousure(){
    var num = 0
    return {
        incremento : function(){
            num+= 1
        },
        incrementoPor10 : function(){
            num+=10
        }, 
        pedirValor : function(){
            return num
        },
        cambiarValor : function(a){
            num=a
        }
    }
}

function ListaDeFuncionesInvitados (arregloInvitados, codigoSecreto){
        var arrayAux = [];
        for(let i=0;i< arregloInvitados.length; i+=1){
            var inter = function(codigo){
                if(codigo===codigoSecreto){
                   return arregloInvitados[i];
                }else{
                  return `código secreto: invalido`;
                }
            };
          arrayAux.push(inter);
        }
      console.log(arrayAux);
      return arrayAux;
    }

function armarListaDeInvitados(funcionesInvitados, codigoSecreto){
    var arrayAux = [];
    for(let i=0;i< funcionesInvitados.length; i+=1){
    inter = funcionesInvitados[i](codigoSecreto);
    if (inter != `código secreto: invalido`) {
        arrayAux.push(inter);
    }
    };
    return arrayAux;
}