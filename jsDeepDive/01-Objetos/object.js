function setPropsOnObj(object) {
  object.p = 5;
  object.plataforma = 5;
  object.proximo = (n) => n+1;
  object.la = {
    clave: {
      secreta: {
        es: 404
      }
    }
  }
}

function setPropsOnArr(array) {
  array.hola = () => 'Hola!';
  array.river = 'plate';
  array[0] = 5;
  array.doble = (n) => n*2;
}

function setPropsOnFunc(fn) {
  fn.year = '2017';
  fn.mitad = (n) => n/2;
  fn.prototype.helloWorld = () => 'Hello World';
}