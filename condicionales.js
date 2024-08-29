//Ejercicio 1: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let respuestabelleza = prompt ("¿Eres bellisimo/a?")
if (respuestabelleza.toLowerCase () === "si" || respuestabelleza.toLowerCase==="sí" ) {
    alert("Ciertamente tienes razón");
} else {
    alert ("No te creo, debes trabajar tu amor propio");
}

// Ejercicio 2: Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numerousuario = parseInt(prompt("Ingresa un número para combrobar que es divisible entre 2"));
if (numerousuario % 2 === 0) {
    alert(numerousuario + "es divisible entre 2");
} else {
    alert(numerousuario + "No es divisible entre 2. ¡Intenta de nuevo!");
}

// Ejercicio 3 : Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let probabilidadnumero = parseInt (prompt("Ingresa un número"));
if (probabilidadnumero % 2 === 0)  {
    alert(probabilidadnumero + "Es par");
} else {
    alert (probabilidadnumero + "No es par");
}

// Ejercicio 4: Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let premionumero = parseInt (prompt("Ingresa tu número de cliente"));
if (premionumero === 1000) {
    alert ("Ganaste un premio");
} else {
    alert ("lo sentimos, sigue participando");
}

//Ejercicio 5: Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numero1= parseInt (prompt("Ingresa el primer número"));
let numero2= parseInt (prompt("Introduce el segundo número"));

if (numero1 > numero2) {
    alert ("El " + numero2 + "es menor");
} else { if (numero1 < numero2){
    alert ("El " + numero1 + "es menor");
} else { 
    alert ("Los números son iguales");
}

//Ejercicio 6 : Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let num1may = parseInt (prompt("Ingrese el primer número"));
let num2may = parseInt (prompt("Ingrese el segundo número"));
let num3may = parseInt (prompt("Ingrese el tercer número"));

if (num1may>num2may && num1may>num3may) {
    alert ("El " + num1may + "es mayor");
} else if (num2may>num1may && num2may>num3may) {
    alert ("El " + num2may + "es mayor");
} else if (num3may>num1may && num3may>num2may) {
    alert ("El " + num3may + "es mayor");
}else{
    alert ("Todos los número son iguales")
}

// Ejercicio 7: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diasemana = (prompt("Ingresa el día de la semana").toLowerCase ());
if (diasemana === "lunes") {
    alert ("Feliz inicio de semana");
} else if (diasemana === "viernes") {
        alert ("Casi es fin de semana");    
    } else if (diasemana === "sabado" || diasemana === "domingo") {
    alert ("Disfruta con tu familia");
    } else {
    alert ("ten un bonito día")
}
    
// Ejercicio 8: Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es

let notacalif = parseInt(prompt("Ingresa tu calificación (entre 1 y 10)"));

if (notacalif < 1 || notacalif > 10) {
    alert("Error: La calificación debe estar entre 1 y 10.");
} else if (notacalif < 6) {
    alert("Reprobado");
} else if (notacalif >= 6 && notacalif < 9) {
    alert("Regular");
} else if (notacalif === 9) {
    alert("Bien");
} else if (notacalif === 10) {
    alert("Excelente");
}

// Ejercicio 9  Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

}
