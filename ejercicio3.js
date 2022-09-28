"use strict";

let letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let letrasCalculadas = [];
function calcLetraDni() {
    let dni = prompt("Escribe un DNI sin la letra. (Escriba '-1' si ha acabado.)");
    while((dni.length!=8&&dni!=-1)||isNaN(dni)){
        dni = prompt(`ERROR.El DNI introducido no es válido.(La longitud es incorrecta o un carácter no es válido.) Escribe un DNI sin la letra. (Escriba '-1' si ha acabado.)`);
    }
    let letra = letrasDNI[dni%23];
    if(typeof(letra)!="undefined"){
        letrasCalculadas = [...letrasCalculadas, letra];
    }
    if(dni==-1){
        clearInterval(intervalo);
        let letrasFinal="";
        for (let index = 0; index < letrasCalculadas.length; index++) {
            letrasFinal=`${letrasFinal}${letrasCalculadas[index]}`;
        } 
        console.log(letrasFinal);
    }
}
let intervalo = setInterval(calcLetraDni, 10000, letrasCalculadas);