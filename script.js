'use strict'

/*Si queremos saber si una propiedad existe o tiene valor, este es un método 
para evitar demasiados condicionales o un switch*/

//Ejemplo comprimido
function analizar_fruta(propiedad){
    
    var comparador = {
        banana : "3,5",
        manzana: "5",
        pomelo : "2,9",
        limón : "3,5"
    }
    //Las dobles "?" asignan un valor en caso del que el 1º no se encuentre
    return comparador[propiedad] ?? 'No tenemos dicha fruta'
}

console.log(analizar_fruta('limón'));

//ejemplo con condicionales
function analizar_fruta_if(propiedad) {
    if (propiedad == 'banana') {
        return "3,5"
    }
    else if(propiedad == 'manzana'){
        return "5"
    }
    else if(propiedad == 'pomelo'){
        return "2,9"
    }
    else if(propiedad == 'limón'){
        return "3,5"
    }
    else{
        return "No tenemos dicha fruta"
    }
}