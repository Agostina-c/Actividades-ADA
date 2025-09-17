//Ejercicio 1:
//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y
//muestra cuál es mayor o si son iguales.
//PSEUDOCÓDIGO
//1. Declarar dos variables para almacenar los números.
//2. Pedir al usuario que ingrese dos números.
//3. Comparar los números y mostrar el resultado.
const promt = require('prompt-sync')();
const numero1 = parseFloat(prompt('ingrese un primer número'));
const numero2 = arseFloat(prompt('ingrese un segundo número'));
if (numero1 > numero2){
     console.log('El primer número ingresado'+ numero1+ 'es mayor al segundo número ingresado'+ numero2);
}
else if (numero1 < numero2) {
    console.log('El segundo número ingresado'+ numero2+ 'es mayor al primer número ingresado'+ numero1);
}
else {
    console.log(numero1 + numero2 + 'Ambos números ingresados son iguales');
}

//Ejercicio 2:
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las
//constantes.
//PSEUDOCÓDIGO
//1. Definir las constantes RANGO_MINIMO y RANGO_MAXIMO.
//2. Pedir al usuario que ingrese un número y almacenarlo en una variable.
//3. Verificar si el número está dentro del rango utilizando una estructura if-else.
//4. Mostrar un mensaje indicando si el número está dentro o fuera del rango
const promt = require('prompt-sync')();
const numero = parseFloat(prompt('ingrese un número'));
rangoMinimo = 9;
rangoMaximo = 17;
if (numero >= rangoMinimo && numero <= rangoMaximo){
    console.log('El número ingresado'+ numero + 'está dentro del rango');
}
else {
    console.log('El número ingresado' + numero + 'no está en el rango');
}

//Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores
//booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese dos valores booleanos y almacenarlos en variables.
//2. Mostrar el resultado de diversas combinaciones lógicas.
//EJEMPLOS Mostrar los valores ingresados, valor1 y valor 2
//Mostrar AND - Mostrar OR - Mostrar NOT de cada uno
const promt = require('prompt-sync')();
const condicion1 = prompt('ingrese un valor para la condicion1');
const condicion2 = prompt ('ingrese un valor para la condicion2');
console.log ('Condición 1:' + condicion1);
console.log ('Condición 2' + condicion2);
console.log ('Combinación lógica AND:', condicion1 && condicion2);
console.log ('Combinación lógica OR:', condicion1 || condicion2);
console.log ('Combinación lógica NOT;', !condicion1);
console.log ('Combinación lógica NOT;', !condicion2);

//Ejercicio 4:
//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre
//ingresado es igual a tu nombre.
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese su nombre y almacenarlo en una variable.
//2. Comparar el nombre ingresado con tu nombre y mostrar un mensaje adecuado.
//EJEMPLO - Si es exactamente igual --> "¡Hola, TuNombre! Bienvenido de nuevo".
//Caso contrario --> "Hola, [nombre]. No estás en mi lista."
const promt = require('prompt-sync')();
const tuNombre = prompt('ingrese su nombre');
miNombre = Agostina;
if(miNombre === tuNombre){
    console.log('Los nombres son iguales. ¡Hola Agostina! Bienvenida de nuevo');
}
else {
    console.log('Hola,' + tuNombre + 'No estàs en mi lista');
}

//Ejercicio 5:
//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de
//los tres.
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese tres números y almacenarlos en variables.
//2. Comparar los números y mostrar el mayor.
//AYUDA COMPARA EL PRIMERO CON EL SEGUNDO Y EL PRIMERO CON EL TERCERO. Mostrar el resultado.
//CASO CONTRARIO COMPARA EL SEGUNDO CON EL PRIMERO Y EL SEGUNDO CON EL TERCERO. Mostrar el resultado.
//CASO CONTRARIO . Mostrar el resultado.

const promt = require('prompt-sync')();
const n1 = parseFloat(prompt('ingrese un primer número'));
const n2 = parseFloat(prompt('ingrese un segundo número'));
const n3 = parseFloat(prompt('ingrese un tercer número'));

if (n1>n2 && n1>n3){
    console.log('El número'+ n1 +'es el mayor de todos');
}
else if(n2>n1 && n2> n3){
    console.log('El número'+ n2 +'es el mayor de todos');
}
else (n3>n1 && n3>n2){
    console.log('El número'+ n3 +'es el mayor de todos')    
} 

//Ejercicio 6:
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje
//personalizado según el caso.
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese su edad y almacenarla en una variable.
//2. Verificar si la edad es mayor o menor de edad.
//3. Mostrar un mensaje personalizado según el caso.
const prompt=require('prompt-sync')();
let ingresarEdad = parseInt(prompt('ingrese su edad :'));
if (ingresarEdad>=18){
    console.log('Es mayor de edad');
}
else if (ingresarEdad < 18){
    console.log('es menor de edad');
}

//Ejercicio 7:
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con
//un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese su peso en kilogramos y almacenarlo en una variable.
//2. Convertir el peso a libras multiplicando por 2.20462.
//3. Mostrar el resultado con un mensaje.
const prompt = require ('prompt-sync')();
let ingresarPeso = parseFloat(prompt('ingrese un peso en kg:'));
let conversionALibras= 2.20462;
let pesoALibras = ingresarPeso * conversionALibras;
console.log('El peso ingresado en kg' + ingresarPeso + 'equivale a:' + pesoALibras +'libras');

//Ejercicio 8:
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si
//el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la
//formula)
//PSEUDOCÓDIGO
//1. Solicitar al usuario que ingrese las longitudes de los tres lados y almacenarlas en variables.
//2. Comparar los lados para determinar el tipo de triángulo.
//3. Mostrar el resultado.
//AYUDA: Un triángulo es equilátero si los tres lados son iguales, isósceles si dos lados son iguales y
//escaleno si todos los lados son diferentes.
const prompt = require ('prompt-sync')();
let lado1 = parseFloat (prompt('ingrese la longitud del lado 1:'));
let lado2 = parseFloat (prompt('ingrese la longitud del lado 2:'));
let lado3 = parseFloat (prompt('ingrese la longitud del lado 3:'));
if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    console.log('Es un triangulo equilatero');
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log('Es un triangulo isosceles');
}
else if (lado1 != lado2 || lado1 != lado3 || lado2 != lado3){
    console.log('Es un trinagulo escaleno');
}

//Ejercicio 9:
//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un
//círculo y calcula su área y perímetro utilizando la constante PI.
//PSEUDOCÓDIGO
//1. Definir una constante PI con el valor de 3.14159.
//2. Solicitar al usuario que ingrese el radio del círculo y almacenarlo en una variable.
//3. Calcular el área y el perímetro utilizando las fórmulas correspondientes.
//AYUDA: El área de un círculo se calcula como PI * radio^2 y el perímetro como 2 * PI * radio
const prompt = require ('prompt-sync')();
let radio = parseFloat('Ingrese la medida del radio para el circulo:');
const PI = 3.14159;
const area = PI * radio * radio;
const perimetro = 2 * PI * radio;
console.log ('El area del circulo es:' + area.toFixed(2));
console.log ('El perimetro del circulo es:' +perimetro.toFixed(2));

/*Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si
el número no está dentro de ese rango, muestra un mensaje de error.
PSEUDOCÓDIGO
1. Solicitar al usuario que ingrese un número del 1 al 7 y almacenarlo en una variable.
2. Verificar el valor del número y mostrar el día de la semana correspondiente.
3. Si el número no es válido, mostrar un mensaje de error.
AYUDA: Los días de la semana son: 1. Lunes, 2. Martes, 3. Miércoles, 4. Jueves, 5. Viernes, 6.
Sábado, 7. Domingo
Puedes usar if anidados para verificar el día, o switch para simplificar código.
*/
const prompt = require ('prompt-sync')();
let numeroDeDia = parseInt(prompt('ingrese un número del 1 al 7:'));
switch (numeroDeDia){
    case 1:
        console.log('Es el día Lunes');
    break;

    case 2:
        console.log('Es el día Martes');
    break;

    case 3:
        console.log('Es el día Miercoles');
    break;

    case 4:
        console.log('Es el día Jueves');
    break;

    case 5:
        console.log('Es el día Viernes');
    break;

    case 6:
        console.log('Es el día Sabado');
    break;

    case 7:
        console.log('Es el día Domingo');
    break;

    default:
        console.log ('Ocurrio un error, vuelva a intentar. Recuerde ingresar un número del 1 al 7');
    break;
}