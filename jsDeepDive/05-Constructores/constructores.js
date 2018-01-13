function CalculadoraNPI (){
  this.auxiliar = [];
  this.sum

}

CalculadoraNPI.prototype.agregar = function(){  
  for(let i=0; i< arguments.length; i++){
    this.auxiliar.push(arguments[i])
  }
},

CalculadoraNPI.prototype.sumar = function(){
  if(this.auxiliar.length >= 2){
  this.sum = this.auxiliar.pop() + this.auxiliar.pop()
  this.auxiliar.push(this.sum)
  }else{
    throw 'La calculadoraNPI necesita por lo menos 2 números'
  }    
},

CalculadoraNPI.prototype.restar = function(){
  if(this.auxiliar.length >= 2){
  this.sum = this.auxiliar[length-1] - this.auxiliar[length]
  this.auxiliar.splice(1,2)
  this.auxiliar.push(this.sum)
  }else{
    throw 'La calculadoraNPI necesita por lo menos 2 números'
  }
},

CalculadoraNPI.prototype.dividir = function(){
  if(this.auxiliar.length >= 2){
  this.sum = this.auxiliar[length] / this.auxiliar[length+1]
  this.auxiliar.splice(1,2)
  this.auxiliar.push(this.sum)
}else{
  throw 'La calculadoraNPI necesita por lo menos 2 números'
}
},

CalculadoraNPI.prototype.multiplicar = function(){
  if(this.auxiliar.length >= 2){
  this.sum = this.auxiliar[length-1] * this.auxiliar[length]
  this.auxiliar.splice(1,2)
  this.auxiliar.push(this.sum)
}else{
  throw 'La calculadoraNPI necesita por lo menos 2 números'
}
},

CalculadoraNPI.prototype.valor = function(){
    return this.sum
}