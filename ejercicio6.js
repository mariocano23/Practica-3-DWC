"use strict";

function numerosPrimYPali() {
    console.log("Se está ejecutando el programa espere un momento.");
    let primosYPalindromos= []
    let listado= "Números primos y palindromos hasta el 100000:\n";
    for (let num = 0; num <= 100000; num++) {
        let primo = true;
        let palindromo = false;
        let numString=`${num}`;
        if(num>2&&num!=4){ //Comprobador de casos especiales.
            for (let i = 2; i < num/2 ; i++) { //Comprobación de que el número sea primo.
                if (num%i==0){
                    primo = false;
                }
            };
        }else{
            primo=false;
        }
        if (num==(numString.split("").reverse().join(""))) { //Comprobación de que el número sea palíndromo.
            palindromo=true;
        }
        if (primo==true&&palindromo==true) {
            primosYPalindromos= [...primosYPalindromos, num];
        }
    }
    for (let index = 0; index < primosYPalindromos.length; index++) {
        listado = `${listado}${primosYPalindromos[index]} `;
    }
    return listado;
}
console.log(numerosPrimYPali());

