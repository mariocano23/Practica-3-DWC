"use strict";

function toCani(cadena){
    let cani = ""; //Nueva cadena que vamos a crear.
    for (let index = 0; index < cadena.length; index++) {
        let letra = cadena.charAt(index); //He creado esta variable para poder identificar cada letra por separado más fácilmente.
        if (letra.toLowerCase() == "c" ){
            letra = "k"
        }
        if (index%2==0) {
            cani = `${cani}${letra.toUpperCase()}`;
        }else{
            cani = `${cani}${letra.toLowerCase()}`;
        }   
    }
    for (let index = 1; index < 2+ Math.random()*4; index++) {
        cani = `${cani}H`;
    }


    return cani;
}

console.log(toCani("una cadena cani es como esta"));
