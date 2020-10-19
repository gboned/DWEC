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

/**
 * Al darle click al botón 6, se eliminan los espacios en blanco
 * de la String introducida, y en caso de que la longitud de la
 * variable donde se guarda el resultado de lo mismo, da de longitud 0,
 * se devuelve como resultado que es una String vacía, de lo contrario
 * se devuelve que no es una String vacía
 */
function clickButton6() {
    var eliminarEspaciosBlancos = contenidoTexto.value.trim();

    if (eliminarEspaciosBlancos.length === 0) {

        textoResultado.innerText = "El String és buid";
    } else {
        
        textoResultado.innerText = "El String no és buid";
    }
}

/**
 * Al darle click al botón 7, se guarda el valor del contenido
 * del texto ingresado en una variable, se recorre la longitud
 * de este texto, y se van guardando cada una de las letras del
 * mismo en una array. Después se gira esta misma array, se convierte
 * a String de nuevo, y se devuelve en el contenedor del resultado, la
 * string del revés.
 */
function clickButton7() {
    var contenidoTextoValor = contenidoTexto.value;
    var letrasString = [];
    for (i = 0; i < contenidoTextoValor.length; i++) {
        letrasString.push(contenidoTextoValor.charAt(i));
    }
    letrasString.reverse();
    var letrasString = letrasString.toString();
    textoResultado.innerText = letrasString.replaceAll(",", "");
}

/**
 * Al darle click al botón 8, se inicia un contador a 0, y con
 * un bucle se recorre toda la longitud del texto introducido,
 * si dentro de este texto se encuentran 'a', se va sumando 1
 * al contador anterior, y continuando hasta que se llega al
 * final de la String y se devuelve en el resultado el número
 * de 'a' que hay en el texto
 */
function clickButton8() {
    var contadorA = 0;
    for (i = 0; i < contenidoTexto.value.length; i++) {
        if (contenidoTexto.value.charAt(i) === 'a') {
            contadorA += 1;
            continue;
        }
    }
    textoResultado.innerText = `Hi ha ${contadorA} 'a' dins del text introduït`;
}

/**
 * Al darle click al botón 9, se guarda en una variable la posición de
 * la posible 'a' que puede hacer dentro del texto introducido, en caso
 * de que el resultado de esta variable NO sea -1 (ya que ello indicaría
 * que no hay ninguna 'a'), se devolvería el texto que hay desde la posición
 * 0 de la String hasta la posición de la primera 'a', de lo contrario, se
 * indica que no hay ninguna 'a' dentro del texto introducido
 */
function clickButton9() {
    var posicionPrimeraA = contenidoTexto.value.indexOf('a');

    if (posicionPrimeraA != -1) {
        textoResultado.innerText = contenidoTexto.value.substr(0, posicionPrimeraA);
    } else {
        textoResultado.innerText = "No hi ha cap 'a' dins del text introduït";
    }  
}

/**
 * Al darle click al botón 10, se guarda en dos variables la posición de la primera
 * y de la última 'a' dentro del texto introducido. En caso de que las dos posiciones
 * sean iguales, y ninguna de las dos sea igual a -1, el resultado será la posición
 * de la primera 'a'. Si ninguna de las dos es igual a -1, dará las posiciones de
 * ambas 'a'. Si no se cumple nada de lo anterior, el resultado será que no hay ninguna
 * 'a' dentro del texto introducido
 */
function clickButton10() {
    var posicionPrimeraA = contenidoTexto.value.indexOf('a');
    var posicionUltimaA = contenidoTexto.value.lastIndexOf('a');

    if (posicionPrimeraA == posicionUltimaA && posicionPrimeraA != -1 && posicionUltimaA != -1) {
        textoResultado.innerText = `Només hi ha una 'a' a la posició: ${posicionPrimeraA}`;
    } else if (posicionPrimeraA != -1 && posicionUltimaA != -1) {
        textoResultado.innerText = `Posició de la primera 'a': ${posicionPrimeraA} \n Posició de l'última 'a': ${posicionUltimaA}`;
    } else {
        textoResultado.innerText = "No hi ha cap 'a' dins del text introduït";
    }
}

/**
 * Al darle click al botón 11, se guarda en una variable el resultado
 * de reemplazar 'la' (también las que incluyen algún carácter o ambos 
 * en mayúscula) por una String vacía. Si al buscar esta String dentro
 * del texto introducido, sale un resultado diferente a -1, se sustituyen
 * la o las ocurrencias de dicha String, en el caso contrario, se indica
 * que no hay ninguna ocurrencia dentro del texto introducido
 */
function clickButton11() {
    var remplazaLa = contenidoTexto.value.replace(/la/gi, '');

    if (contenidoTexto.value.search(/la/gi) != -1) {
        textoResultado.innerText = remplazaLa;
    } else {
        textoResultado.innerText = "No hi ha cap ocurrència de 'la' dins del text introduït";
    }
}

/**
 * Al darle click al botón 12, se hace lo mismo que con el botón 11, excepto
 * que al reemplazar 'la', se indica que se reemplace por un asterisco.
 */
function clickButton12() {
    var remplazaLaAsterisco = contenidoTexto.value.replace(/la/gi, '*');

    if (contenidoTexto.value.search(/la/gi) != -1) {
        textoResultado.innerText = remplazaLaAsterisco;
    } else {
        textoResultado.innerText = "No hi ha cap ocurrència de 'la' dins del text introduït";
    }
}

/**
 * Al darle click al botón 13, se añade en una variable el valor del texto
 * introducido, y en otra la primera letra de dicho contenido, y se devuelve
 * el resultado de reemplazar el texto introducido, por el mismo texto, pero
 * añadiendo la primera letra de este al principio y al final
 */
function clickButton13() {
    var contenidoTextoValor = contenidoTexto.value;
    var primeraLetraContenido = contenidoTextoValor[0];

    textoResultado.innerText = contenidoTextoValor.replace(contenidoTextoValor, `${primeraLetraContenido}` + contenidoTextoValor + `${primeraLetraContenido}`);
}

/**
 * Al darle click al botón 14, se guarda en una variable el valor del
 * texto introducido, y se crea una String vacía. Se recorre el contenido
 * del texto, y si lo que se encuentra NO es un espacio en blanco, se añade
 * el carácter a la String vacía creada anteriormente, la cual se devuelve 
 * como resultado
 */
function clickButton14() {
    var contenidoTextoValor = contenidoTexto.value;
    var nuevaString = '';

    for (i = 0; i < contenidoTextoValor.length; i++) {
        if (contenidoTextoValor.charAt(i) != ' ') {
        nuevaString += contenidoTextoValor.charAt(i);
    }
    }
    textoResultado.innerText = nuevaString;
}

/**
 * Al darle click al botón 15, se guarda en una variable el valor del
 * texto introducido, y se crea una variable con una String Vacía. Se
 * eliminan los espacios que hay al principio y al final del texto, y
 * se reemplazan los espacios extra que hay entre las palabras, por un
 * único espacio. Se recorre la longitud del texto, y si se encuentra un
 * espacio, se reemplaza por un guión, y se añade a la String vacía, si
 * no es un espacio, se añade directamentea la String. Se devuelve la
 * nueva String como resultado
 */
function clickButton15() {
    var contenidoTextoValor = contenidoTexto.value;
    var nuevaString = '';

    contenidoTextoValor = contenidoTextoValor.trim();
    contenidoTextoValor = contenidoTextoValor.replace(/ +/g, ' ');

    for (i = 0; i < contenidoTextoValor.length; i++) {

        if (contenidoTextoValor.charAt(i) == ' ') {
            nuevaString += contenidoTextoValor.charAt(i).replace(' ', '-');
        } else {
            nuevaString += contenidoTextoValor.charAt(i);
        }
    }

    textoResultado.innerText = nuevaString;
}

/** 
 * Al darle click al botón 16, en un principio hace igual que el anterior
 * botón, pero añadiendo de antemano la letra en la primera posición del
 * texto introducido a la nueva String, después recorre el contenido del 
 * texto, y si encuentra un espacio, añade a la nueva String el carácter 
 * que hay a continuación. Devuelve el resultado, pasando a mayúsculas
 * el acrónimo 
 */
function clickButton16() {
    var contenidoTextoValor = contenidoTexto.value;
    var nuevaString = '';

    contenidoTextoValor = contenidoTextoValor.trim();
    contenidoTextoValor = contenidoTextoValor.replace(/ +/g, ' ');
    
    nuevaString += contenidoTextoValor.charAt(0);

    for (i = 0; i < contenidoTextoValor.length; i++) {
        if (contenidoTextoValor.charAt(i) == ' ') {
            nuevaString += contenidoTextoValor.charAt(i + 1);
        }
    }


    textoResultado.innerText = nuevaString.toUpperCase();
}