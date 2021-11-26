function Divisores(limite){
    var listaRespuesta = [];

    for(let i = 1; i<= limite ; i++){
        if(limite % i == 0)
        {
            listaRespuesta.push(i);
        }
    }
    return listaRespuesta;
}

console.log(Divisores(10));