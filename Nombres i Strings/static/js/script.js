// Creo dos variables globales
// Esta variable apunta hacia el input
var contenidoTexto = document.getElementsByTagName("input")[0];
// Esta variable apunta al div donde se escribirá el resultado
var textoResultado = document.getElementById("textResult");

/** 
 * Al darle click al botón 1, se intentará convertir lo que se
 * ha introducido en un número, y se indicará si este es igual
 * a 0, positivo o negativo. En caso de no ser ninguno, se
 * indicará que hace falta introducir un número
 */
function clickButton1() {
    var contenidoTextoANumero = parseInt(contenidoTexto.value);
    console.log(contenidoTexto);
    console.log(contenidoTextoANumero);
    if (contenidoTextoANumero > 0) {
        textoResultado.innerText = "El nombre és positiu";
    } else if (contenidoTextoANumero < 0) {
        textoResultado.innerText = "El nombre és negatiu";
    } else if (contenidoTextoANumero === 0) {
        textoResultado.innerText = "El nombre és igual a 0";
    } else {
        textoResultado.innerText = "Has d'escriure un nombre per veure el resultat";
    }
}

/**
 * Al darle click al botón 2, se intentará convertir lo que se
 * ha introducido en un número, se comprueba si el tipo de este
 * carácter es un número o no es un NaN, y de ser así, en el resultado
 * se indica que es un número, de lo contrario, se indica que no es un
 * número
 */
function clickButton2() {
    var contenidoTextoANumero = parseInt(contenidoTexto.value);

    if (typeof contenidoTextoANumero == 'number' && !isNaN(contenidoTexto.value)) {

        textoResultado.innerText = "El que has introduït és un nombre";
    } else {

        textoResultado.innerText = "El que has introduït no és un nombre";
    }
}
