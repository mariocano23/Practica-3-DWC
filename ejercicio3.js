"use strict";

let letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

function calcLetraDni(letras=[]) {

    let dni = prompt("Escribe un DNI sin la letra. (Escriba '-1' si ha acabado.)");
    let letra = letrasDNI[dni%23];
        let letras2 = [...letras, letra];
    if(dni!=-1){
        setTimeout(calcLetraDni, 10000, letras2);
    }else{
        let letrasFinal="";
        for (let index = 0; index < letras.length; index++) {
            letrasFinal=`${letrasFinal}${letras[index]}`;
        } 
        console.log(letrasFinal);
        return letrasFinal;
    }
}

console.log(calcLetraDni());