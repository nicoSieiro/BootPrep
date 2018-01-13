function crearCalculadora(){
    var resultado = 0
    return {
        valor : function(){
            return resultado
        },

        sumar : function(n){
            resultado += n
        },
        
        restar : function(n){
            resultado -= n
        },

        reset : function(){
            resultado = 0
        }

    
    
    }
}