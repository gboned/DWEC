// Creo dos variables globales
// Esta variable obtiene el valor de lo que se introduce dentro del recuadro
var contenidoTexto = document.getElementsByTagName("input")[0].value;
// Esta variable apunta al div donde se escribirá el resultado
var textoResultado = document.getElementById("textResult");

/** 
 * Al darle click al botón 1, se intentará convertir lo que se
 * ha introducido en un número, y se indicará si este es igual
 * a 0, positivo o negativo. En caso de no ser ninguno, se
 * indicará que hace falta introducir un número
 */
function clickButton1() {
    var contenidoTextoANumero = parseInt(contenidoTexto);

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
