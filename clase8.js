const prompt = require('prompt-sync')();
let numeroUsuario = parseFloat(prompt('Ingrese un número cualquiera:'));
numeroElegido = numeroUsuario;
elDoble = (numeroElegido * 2);
console.log('El doble del número ingresado es:', elDoble);

//ej2
const prompt = require('prompt-sync')();
let ingresarNumero = parseFloat(prompt('Ingrese un número cualquiera:'));
numeroIngresado = ingresarNumero;
verificacion = '';
if (numeroIngresado > 0){
    verificacion = 'El número ingresado es positivo';
}
else if (numeroIngresado < 0){
    verificacion = 'El número ingresado es negativo';
}
else {
    verificacion = 'El número ingresado es el cero';
}
console.log(verificacion);

//ej3
const prompt = require('prompt-sync')();
let primerNumero = parseFloat(prompt('Ingrese un primer número'));
let segundoNumero = parseFloat(prompt('Ingrese un segundo número'));
n1 = primerNumero;
n2 = segundoNumero;
let suma = n1 + n2;
console.log('La suma de los números ingresados es:', suma);

//ej4
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Ingrese un número entero:'));
n = numero;
determinacion = '';
if(n%2) {
    determinacion = 'El número ingresado es par';
}
else {
    determinacion = 'El número ingresado es impar';
}
console.log(n, ':', determinacion);

//ej5
const prompt = require('prompt-sync')();
let nombre = parseFloat(prompt('Ingrese un nombre'));
let mensaje = 'Desde la NASA enviamos un saludo muy especial a :'
console.log (mensaje + nombre);