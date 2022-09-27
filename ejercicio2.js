"use strict";

function temporizador(minutos, segundos) {
    if(segundos===undefined){
        segundos=minutos;
        minutos=0;
    }
    if (segundos>59 || segundos<0 || minutos<0) {
        return "ERROR. Los minutos o segundos establecidos no son válidos.";
    }
    return `${minutos}:${segundos}`;

}

setInterval(temporizador(2,50),1);
