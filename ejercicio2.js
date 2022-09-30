"use strict";

function temporizador(minutos, segundos) {
    if(segundos===undefined){ //Cambio de minutos a segundos si solo se introduce un parametro.
        segundos=minutos; 
        minutos=0;
    }
    if (segundos>59 || segundos<0 || minutos<0) {
        return "ERROR. Los minutos o segundos establecidos no son válidos.";
    }
    if (segundos<10) {
        console.log(`${minutos}:0${segundos}`);
    } else {
        console.log(`${minutos}:${segundos}`);
    }
    
    segundos--;
    if(segundos==-1&&minutos>0){
        minutos--;
        segundos=59;
    }
    if (minutos==0&&segundos==0) {
        console.log("Se ha acabado el tiempo.");
    } else {
        setTimeout(temporizador ,1000,minutos,segundos); //Uso del setTimeout para hacer recursividad cada segundo.
    }

}

temporizador(2,50);

