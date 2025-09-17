/*Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente
hasta que el usuario ingrese un número negativo. Luego, imprime la suma
de todos los números ingresados.
*/
const prompt =require ('prompt-sync')();
let numero = parseInt(prompt('Ingrese un número (o un número negativo para finalizar el ciclo)')); 
let suma = 0;
while (numero>0){
    suma= suma+numero;
    numero= parseInt(prompt('ingrese otro número'));
}
console.log ('La suma total de todos los números ingresados es:'+ suma);

/*Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese
la correcta. La contraseña correcta es "1234".
*/
const prompt= require('prompt-sync');
let contraseña = '1234';
do{
    contraseñaDelUsuario= parseInt(prompt('Ingrese la contraseña:'));
    if(contraseñaDelUsuario != contraseña){
        console.log('La contraseña no es valida. Por favor, intente de nuevo');
    }
} while (contraseñaDelUsuario === contraseña);
console.log('La contraseña es correcta');

/*Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el
número 0 hasta un número X (inclusive). Para esto, debes seguir los
siguientes pasos:
1. Solicitar al usuario que ingrese un número X.
2. Inicializar una variable para contar los números impares.
3. Utilizar un ciclo for para recorrer los números desde 0 hasta X
(inclusive).
4. Dentro del ciclo, verificar si el número es impar.
5. Si el número es impar, incrementar el contador de números
impares.
6. Al finalizar el ciclo, imprimir en consola la cantidad de números
impares encontrados.
7. Utiliza el operador módulo (%) para verificar si un número es impar.
8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe
imprimir: “La cantidad de números impares desde 0 hasta 10
(inclusive) es: 5”.
*/
const prompt =require ('prompt-sync')();
let num = parseInt(prompt('Ingrese un número entero')); 
let impares = 0;
for(let i= 0; i <=num; i++){
    if(i %2 !=0){
        impares +=i;
    }
}
console.log('La cantidad de números impares del valor ingresado son:'+impares );

/*Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes
usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas
de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una
utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.
*/
const prompt =require('prompt-sync');
let notas = [];
for(i=0; i<13; i++){
    let notasIngresadas = parseInt(prompt('Ingrese las notas del estudiante:'+i));
    notas.push(notasIngresadas);
}
console.log('Las notas del estudiante'+ i +'son'+ notas);

/*Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)
*/
const prompt =require('prompt-sync');
let listaAlumnos = [];
for(let i=0; i <=5; i++){
    nombreAlumno=prompt('ingrese el nombre del alumno:'+ i);
    listaAlumnos.push(nombreAlumno);
}
let verificarNombre= prompt('ingrese nuevamente el nombre del alumno/a para verificar si se encuentra en el sistema');
if (listaAlumnos.includes(verificarNombre)){
    console.log('el nombre ingresado:'+ verificarNombre +'se encuentra ingresado al sistema');
}
else {
        console.log('el nombre ingresado:'+ verificarNombre +'no se encuentra ingresado al sistema');
}

/*Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000.
*/
let matriz =[
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1024, 4],
    [5, 5, 5097, 100, 4],
]
let sum = 0;
for(let i = 0; i< matriz.length; i++){
    for(let j = 0; j< matriz[i].length; j++){
        if(matriz[i][j]>=10 && matriz[i][j]<1000){
            suma +=matriz[i][j]
        }
    }
}
console.log('La suma de los números que son >=10 y <1000 el resultado es:'+ sum);

/*Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivos. Luego, escribe un algoritmo para sumar todos
los números en la matriz.
*/
let matriz =[
    [10, 22, 9, 1, 14],
    [27, 17, 73, 31, 4],
    [74, 7, 3, 21, 69],
    [12, 38, 5, 29, 43],
    [97, 61, 2, 9, 21],
]
let sum = 0;
for(let i = 0; i< matriz.length; i++){
    for(let j = 0; j< matriz[i].length; j++){
        suma +=matriz[i][j]
    }
}
console.log('La suma de todos los números de la matriz es:'+ sum);

/*Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
método “push” en los Arrays. ¡Este método lo veremos en las próximas
clases, pero si desean pueden investigarlo para resolver este desafío!
*/
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
// Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar
// sobre el método “push” en los Arrays.
// ¡Este método lo veremos en las próximas clases,
// pero si desean pueden investigarlo para resolver este desafío!

// Función para sumar la diagonal roja
function sumaDiagonalRoja() {
  let diagonalRoja = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    let valor = 1 + i * 11;
    diagonalRoja.push(valor);
  }
  for (let i = 0; i < diagonalRoja.length; i++) {
    contador += diagonalRoja[i];
  }
  return contador;
}

// Función para sumar la diagonal verde
function sumaDiagonalVerde() {
  let diagonalVerde = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    let valor = 10 + i * 9;
    diagonalVerde.push(valor);
  }
  for (let i = 0; i < diagonalVerde.length; i++) {
    contador += diagonalVerde[i];
  }
  return contador;
}

console.log("Rojo:", sumaDiagonalRoja());
console.log("Verde:", sumaDiagonalVerde());

/*Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos.
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana
y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc.
Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un día en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las
columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas
para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
día que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.
*/
let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100], 
  [1750, 1890, 1900, 1300, 898, 1750, 2800], 
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], 
  [800, 1250, 1430, 2100, 1980, 1270, 950], 
];

function totalSemana(matriz, semana) {
  return matriz[semana - 1].reduce((a, b) => a + b, 0);
}

console.log("Total semana 4:", totalSemana(gastos, 4));

console.log("Total semana 1:", totalSemana(gastos, 1));

function totalDia(matriz, dia) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][dia - 1];
  }
  return suma;
}

console.log("Total día 3:", totalDia(gastos, 3));

console.log("Total dia 1:", totalDia(gastos, 1));

function totalMes(matriz) {
  let total = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      total += matriz[i][j];
    }
  }
  return total;
}

console.log("Total del mes:", totalMes(gastos));

function semanaMasGastos(matriz) {
  let max = 0;
  let semana = 0;
  for (let i = 0; i < matriz.length; i++) {
    let suma = matriz[i].reduce((a, b) => a + b, 0);
    if (suma > max) {
      max = suma;
      semana = i + 1;
    }
  }
  return { semana, max };
}

function diaMasGastos(matriz) {
  let max = 0;
  let dia = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][j];
    }
    if (suma > max) {
      max = suma;
      dia = j + 1;
    }
  }
  return { dia, max };
}
console.log("Semana con más gastos:", semanaMasGastos(gastos));
console.log("Día con más gastos:", diaMasGastos(gastos));