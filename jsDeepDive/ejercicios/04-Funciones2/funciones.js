function concatenar() {
  return Array.prototype.slice.call(arguments).join('');
}

function invocarFunciones() {
  var args = Array.prototype.slice.call(arguments)
  return args.map(fn => fn()).join('')
}

function creadorDeIncrementos(n){
  return function(m) {
    return n+m;
  }
}

function invocacionUnica(fn){
  let usada = false
  return function() {
    if(!usada) {
      usada = true;
      fn();
    }
  }
}

function objetoConClousure() {
  let valor = 0;
  return function() {
    return {
      incremento() {
        valor += 1;
      },
      incrementoPor10() {
        valor += 10;
      },
      pedirValor() {
        return valor;
      },
      cambiarValor(n) {
        valor = n;
      },
    }
  }();
}

// function guestListFns(arr, secret) {
//   return arr.map(guest => {
//     return function(pass) {
//       return pass === secret ? guest : 'Secret-Code: Invalid'
//     }
//   })
// }

function ListaDeFuncionesInvitados(arr, secret) {
  for(let i=0; i<arr.length; i++) {
    arr[i] = function(guest) {
      return function(pass) {
        return pass === secret ? guest : `código secreto: invalido`
      }
    }(arr[i])
  }
  return arr;
}

function armarListaDeInvitados(fnArray, secret) {
  for(let i=0; i<fnArray.length; i++) {
    fnArray[i] = function(fn) {
      return fn(secret);
    }(fnArray[i])
  }
  return fnArray;
}