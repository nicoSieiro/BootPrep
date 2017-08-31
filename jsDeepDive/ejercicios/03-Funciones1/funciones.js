function crearCalculadora(){
  return {
    result: 0,
    valor() {
      return this.result;
    },
    sumar(n) {
      this.result += n;
    },
    restar(n) {
      this.result -= n;
    },
    reset() {
      this.result = 0;
    }
  }
}
