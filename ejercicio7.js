"use strict";

function creaClientes(cadena){
    let datos = cadena.split(':');
    let cliente = {
        nombre: datos[0],
        apellidos: datos[1],
        telefono: datos[2],
        email: datos[3],
        codigopostal: datos[4],
        imprimeCliente: function(){
            console.log(`Nombre: ${this.nombre}\nApellidos: ${this.apellidos}\nTeléfono: ${this.telefono}\nEmail: ${this.email}\nCódigo Postal: ${this.codigopostal}\nServidor de correo: ${this.email.substring(this.email.indexOf('@')+1)}\n`);
        }
    };
    return cliente;
}

let cliente1 = creaClientes("Mario:Cano Soto:645123456:mariocano.alu@iespacomolla.es:03610");
cliente1.imprimeCliente();