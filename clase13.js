//Ejercicio 1
const prompt = require ('prompt-sync')();
let base = parseFloat(prompt('Ingrese el número de base del triangulo'));
let altura = parseFloat(prompt('Ingrese el número de altura del triangulo'));
function calcularAreaTriangulo (base, altura){
   return(base * altura)/2;
}
console.log('De acuerdo a la base' + base + 'y la altura' + altura + 'e{ area calculada es:' + calcularAreaTriangulo(base, altura));

//Ejercicio 2
const prompt = require ('prompt-sync')();
let n1 = parseFloat('Ingrese un primer número');
let n2 = parseFloat('Ingrese un segundo número');
function encontrarMayor (n1, n2){
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}
console.log ('El número mayor entre' + n1 + 'y' + n2 + 'es:' + encontrarMayor(n1, n2));

//Ejercicio 3
const prompt = require ('prompt-sync')();
let saludoGlobal = 'Hola desde el scope Global';
function mostrarMensaje (){
    let saludoGlobal = 'Hola desde el scope Global'
    console.log (saludoGlobal);
    console.log (saludoLocal);
}
mostrarMensaje ();

//Ejercicio 4
const prompt = require ('prompt-sync')();
let num = parseInt(prompt('Ingrese un número entero:'));
function esPar(num){
    if(num%2===0){
        console.log('El número es par');
    }
    else{
        console.log('El número es impar');
    }
}
console.log(esPar);

//Ejercicio 5
const prompt = require ('prompt-sync')();
let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');
const concatenarNombres = function(nombre, apellido) => nombre + apellido;
console.log(concatenarNombres(nombre, apellido));

//Ejercicio 6
const prompt = require ('prompt-sync')();
let hora = parseFloat(prompt('Ingrese un número en horas'));
function convertirHorasAMinutos (hora){
    return hora * 60;
}
console.log('La hora ingresada' + hora + 'es' + convertirHorasAMinutos + 'minutos');

//Ejericio 7
const prompt = require ('prompt-sync')();
let horaActual = parseFloat(prompt('Ingrese la hora actual'));
function mostrarSaludo (horaActual){
    if(horaActual <= 12){
    console.log('Buenos días alegría');
    }
    else if(horaActual < 20){
        console.log('Buenas tardes');
    }
    else{
        console.log('Buenas noches');
    }
}
mostrarSaludo(horaActual);

//Ejercicio 8
const prompt = require ('prompt-sync')();
let celcius = parseFloat(prompt('Ingrese una temperatura en grados celcius'));
const convertirCelciusaFahrenheit = function(celcius) => {
    return(celcius * 9/5) + 32;
}
console.log('La temperatura ingresada' + celcius + '°C son:' + convertirCelciusaFahrenheit(celcius) + '°F');

//Ejercicio 9
const prompt = require ('prompt-sync')();
let n = parseInt(prompt('Ingrese un número entero:'));
function contarHasta(n){
    for(i = 1; i <= n; i++){
        console.log(i)
    }
}
console.log('Los números contados del 1 hasta' + n + 'son' + contarHasta(n));

//Ejercicio 10
const prompt = require ('prompt-sync')();
let numero = parseInt(prompt('Ingrese un número para calcular el factoria'));
const calcularFactorial=function(numero){
    let factorial =1
    for(let i=1; i<=n; i++){
        factorial= factorial*i
    }
    return factorial;
}
