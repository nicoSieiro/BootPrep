function CalculadoraNPI() {
  this.resultado = 0;
  this.numeros = [];
}

CalculadoraNPI.prototype.sumar = function() {
  const [a, b, i] = this.buscarNumeros()
  return this.resultado = this.numeros[i] = a + b;
}

CalculadoraNPI.prototype.restar = function() {
  const [a, b, i] = this.buscarNumeros()
  return this.resultado = this.numeros[i] = a - b;
}

CalculadoraNPI.prototype.dividir = function() {
  const [a, b, i] = this.buscarNumeros()
  return this.resultado = this.numeros[i] = a / b;
}

CalculadoraNPI.prototype.multiplicar = function() {
  const [a, b, i] = this.buscarNumeros()
  return this.resultado = this.numeros[i] = a * b;
}

CalculadoraNPI.prototype.buscarNumeros = function() {
  if (this.numeros.length < 2) throw 'La calculadora necesita por lo menos 2 números'
  const i = this.numeros.length -2;
  const a = Number(this.numeros.splice(i,1));
  const b = Number(this.numeros.splice(i,1));
  return [a,b,i]
}

CalculadoraNPI.prototype.agregar = function(n) {return this.numeros.push(n)};

CalculadoraNPI.prototype.valor = function() {return this.resultado};
