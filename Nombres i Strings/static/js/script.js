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

/**
 * Al darle click al botón 2, se intentará convertir lo que se
 * ha introducido en un número, se comprueba si el tipo de este
 * carácter es un número y no es un Nan, y de ser así, en el resultado
 * se muestra solo la parte entera, en caso de tener decimales
 */
function clickButton3() {
    var contenidoTextoANumero = parseInt(contenidoTexto.value);

    
    if (typeof contenidoTextoANumero == 'number' && !isNaN(contenidoTexto.value)) {
        
        textoResultado.innerText = contenidoTextoANumero;
    } else {

        textoResultado.innerText = "Has d'introduïr un nombre per veure el resultat";
    }
}

/**
 * Al darle click al botón 4, se convierte a String lo que se introduce
 * dentro del recuadro para poder trabajar con el método "split". Añado
 * cuál es el separador del número de sus decimales, y uso eso como 
 * referencia para dividir la String en dos partes y guardarlas como
 * una array. Para obtener la parte decimal, hago un parse a números
 * del elemento "1" de la array que creé antes. Compruebo que lo que se
 * obtiene es un número y no es un tipo "NaN", para que se devuelvan los
 * decimales como respuesta. De lo contrario, se devuelve un mensaje que pide
 * que se introduzca un número
 */
function clickButton4() {
    var contenidoTextoAString = JSON.stringify(contenidoTexto.value);
    var separador = '.';
    var dividirDecimales = contenidoTextoAString.split(separador);
    var obtenerDecimales = parseInt(dividirDecimales[1]);

    if (typeof obtenerDecimales === 'number' && !isNaN(contenidoTexto.value)) {
        
        textoResultado.innerText = obtenerDecimales;
    } else {

        textoResultado.innerText = "Has d'introduïr un nombre per veure el resultat";
    }
}

/**
 * Al darle click al botón 5, lo primero que hace es convertir el contenido
 * del recuadro en un número y lo guardo en una variable, creo otra variable
 * que guarde el resultado de dividir el número entre 19. En caso de que el
 * tipo resultante sea de tipo número o no un NaN, hago que en el resultado se
 * escriba el número resultante de la división, y que lo haga con los 3 primeros
 * decimales, mediante el método toFixed(). En caso de no ser de tipo número
 * o ser un NaN, indico con un mensaje que tiene que introducir un número
 */
function clickButton5() {
    var contenidoTextoANumero = parseInt(contenidoTexto.value);
    var division = contenidoTextoANumero/19

    if (typeof division === 'number' && !isNaN(contenidoTexto.value)) {
        
        textoResultado.innerText = division.toFixed(3);
    } else {

        textoResultado.innerText = "Has d'introduïr un nombre per veure el resultat";
    }
}