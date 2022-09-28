"use strict";

function mostrarFecha() {
    console.log(Date().toString());
    return Date().toString();
}
console.log(setTimeout(mostrarFecha, 3000));