"use strict";

function dnisPorLetra(letra){
    let dnis=`DNIs entre 48357001 y 48357999 que tienen la letra ${letra}:\n`;
    for (let index = 48357001; index <= 48357999; index++) {
        if ((index%23)=='TRWAGMYFPDXBNJZSQVHLCKE'.indexOf(letra)) {
            dnis=`${dnis}${index}${letra} `;
        }
    }
    return dnis;
}
console.log(dnisPorLetra("A"));