/*Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso. 
*/
const prompt = require ('prompt-sync')();
let ingresarNumero = parseFloat(prompt('Ingrese un número:'));
if (ingresarNumero > 0){
    console.log(prompt('El número ingresado:'+ ingresarNumero + 'es positivo'));
}
else if (ingresarNumero < 0){
    console.log (prompt('El número ingresado:'+ ingresarNumero + 'es negativo'));
}
else{
    console.log ('El número ingresado:'+ ingresarNumero + 'es cero');
}

/*Ejercicio 2: Semáforo inteligente
Consigna:
Vamos a programar un semáforo. Escribe un programa que le pida al usuario
ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color
ingresado, el programa debe imprimir un mensaje con la acción
correspondiente:
• Rojo: "Alto, no puedes avanzar."
• Amarillo: "Precaución, prepárate para avanzar."
• Verde: "Avanza con seguridad."
Si el usuario ingresa un color inválido, el programa debe mostrar un
mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
Utiliza un switch para resolver este ejercicio.
*/
const prompt = require ('prompt-sync')();
let semaforo = prompt ('Ingrese uno de los siguientes colores (Rojo, Amarillo, Verde)');
switch(semaforo.toLowerCase()){
    case 'rojo':
        document.write ('Alto, no puedes avanzar.');
        break;
    case 'amarillo':
        document.write ('Precaución, prepárate para avanzar.');
        break;
    case 'verde':
        document.write ('Avanza con seguridad.');
        break;
    default:
        document.write ('Color no reconocido, ingresa rojo, amarillo o verde.')
}

/*Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa
deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
Usa un ciclo for para realizar la tarea.
*/
const prompt = require ('prompt-sync')();
let contHasta = prompt ('Ingrese un número positivo:');
for(let i=0; i<= contHasta; i++ ){
    console.log(i);
}

/*Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al
usuario un número y determine si es par o impar. Muestra un mensaje
explicativo indicando qué significa cada caso.
*/
const prompt = require ('prompt-sync')();
let numero = parseInt(prompt('Ingrese un número entero:'));
if(numero %2 === 0){
    console.log ('El número ingresado es par');
}
else{
    console.log('El número ingresado es impar');
}

/*Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el
programa debe mostrar un mensaje indicando que los valores son inválidos.
*/
const prompt = require ('prompt-sync')();
let nInicio = parseInt(prompt('Ingrese un número entero:'));
let nFinal = parseInt(prompt('Ingrese un número entero:'));
if(nInicio> nFinal){
    document.write('Los números ingresados son invalidos');
}
else{
    for(let i = nInicio; i <= nFinal; i++ ){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

/*Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.
*/
const prompt = require ('prompt-sync')();
let num = parseInt(prompt('Ingrese un número entero:'));
for(let i=1; i<=10; i++){
    console.log('el número${num} multiplicado por ${i} = ${num*i}');
}

/*Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.
*/
const prompt = require ('prompt-sync')();
let num1 = parseInt(prompt('Ingrese un número entero:'));
let num2 = parseInt(prompt('Ingrese un número entero:'));
let operaciónMatematica = parseInt(prompt('Ingrese la operación básica que desea realizar (Suma, Resta, Multiplicación, División) '));
switch(operaciónMatematica){
    case'suma':
        document.write(num1 + num2);
        break;

    case 'resta':
        document.write(num1 - num2);
        break;
    
    case 'multiplicación':
        document.write(num1 * num2);
        break;

    case 'división':
        document.write(num1 / num2);
        break;
    
    default:
        document.write('Ocurrió un error. Por favor vuela a ingresar una operación');
        break;
}

/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for
para resolverlo.
*/
const prompt = require ('prompt-sync')();
let numero = parseInt(prompt('Ingrese un número entero:'));
for(i= 1; i<=100; i ++){
    if(i % numero === 0){
        document.write(i);
    }
}

/*Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un
cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al
final. Usa un ciclo for para realizar la cuenta regresiva.
*/
for(let cont = 10; cont >=0; cont--){
    console.log(i);
}
console.log('¡¡¡¡DESPEGUE!!!!');

/*Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
los intentos restantes. Si no acierta después de los 3 intentos, muestra el
número secreto. Usa un for para resolver este ejercicio.
*/
const prompt =require ('prompt-sync')();
let numRandom = Math.random()*10;
let numeroAzar = Math.ceil(numRandom);
console.log(numeroAzar);
let numeroU = parseInt(prompt('ingrese un número'));
for(i=1; i <=3, i++){
    console.log('este es el intento'+ i +'de 3');
    if(numeroU === numeroAzar){
        console.log('!Acertaste¡, el número es:'+ numeroAzar);
    }
    else if (numeroU != numeroAzar && i <3 ){
        console.log('perdiste un intento. Vuelava a intentar');
    }
    else if (numeroU != nuumeroAzar && i==3){
        console.log('Perdiste. Te quedaste sin intentos');
    }
}