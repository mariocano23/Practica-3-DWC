"use strict";

function mostrarFecha() {
    let fecha = new Date();
    console.log(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`);
}
setTimeout(mostrarFecha, 3000);