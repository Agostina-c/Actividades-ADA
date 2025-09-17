/*Ejercicio 1: Crea un nuevo array con los cuadrados de los números
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es
crear una nueva lista donde cada número de la lista original se haya
transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse
en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.
*/
let listaNumeros =[2, 4, 6, 8];
let dobleDelNumero = listaNumeros.map(numero =>numero *2);
console.log('Los dobles de'+listaNumeros+'son:'+ dobleDelNumero);

/*Ejercicio 2: Filtra los números pares de una lista
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y
guardar únicamente los números pares en una nueva lista. Los números
pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez
que hayas creado la nueva lista, muéstrala en la consola.
*/
let listaNum=[1, 2, 3, 4, 5, 6];
let numerosPares= listaNum.filter(numero => numero %2 ===0);
console.log('Los números pares del la lista son:'+ numerosPares);

/*Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer
número de la lista que sea mayor a 10. Recuerda que el resultado debe ser
únicamente el primer número que cumpla esta condición, no todos los
números que lo hagan.
*/
let listaN=[5, 8, 12, 20, 3];
let primerMayor = listaN.find(numero => numero >10);
console.log('El primer mayor de la lista es:'+ primerMayor);

/*Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar,
imprime el total en la consola.
*/
listaNumeros = [1, 2, 3, 4];
sumaListaNumeros= listaNumeros.reduce((acum, numero) => acum + numero);
console.log('La suma de los numeros es:'+ sumaListaNumeros);

/*Ejercicio 5: Recorre una lista e imprime cada elemento
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer
la lista y mostrar el nombre de cada fruta en la consola, una por una.
*/
listaFrutas=['manzana', 'banana', 'cereza'];
cadaFruta = fruta.forEach((listaFrutas)=>console.log(listaFrutas));

/*Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!"
*/
let palabras = ['Hola', 'mundo', 'javascript'];
let palabrasConPrefijoySufijo = palabras.map((palabra)=>'¡'+palabra+'!');
console.log('Las palabras con prefijo y sufijo quedan:' + palabrasConPrefijoySufijo);

//Ejercicio 7
let nombres = ['Ana', 'Luis', 'Andrea', 'Maria'];
let nombresEmpiezanConA = nombres.filter ((nombre)=> nombre[0]==='A');
console.log('La lista de los nombres que empizan con A es:' + nombresEmpiezanConA);

//Ejercicio 8
let listaNombres = ['Carlos','Daniel', 'Laura','Ana'];
let verificarNombre= listaNombres((nombre)=> nombre === 'Laura');
console.log('El nombre' + verificarNombre + 'se encuentra en la lista');

//Ejercicio 9
let listaDePalabras = ['Sol', 'Luna', 'Estrella'];
let totalLetras = listaDePalabras.reduce((acum, palabra)=> acum + palabra.length, 0);
console.log('El total de letras de la lista' + listaDePalabras+ 'es de :' + totalLetras);

//Ejercicio 10
 let palabras = ['Me', 'guasta', 'aprender', 'javascript'];
 let frase = palabras.join('');
 console.log ('Frase formada:' + frase);

//EJERCICIOS EXTRAS
//ejercicio 1
let lista =['Lucia', 'Aria', 'Maria', 'Luis','Jose', 'Pablo'];
let nombreMenos5Letras = lista.filter((nom)=>nom.length < 5);
console.log('Los nombres de la lista que tiene menos de 5 letras son:' + nombreMenos5Letras.join(',') );

let nombreEnMayuscula = nombreMenos5Letras.map ((nombre)=> nombre.toLocaleUpperCase());
console.log('Los nombres de la lista' + nombreMenos5Letras + 'en mayuscula' + nombreEnMayuscula);
console.log('Los nombres seleccionados son:' + nombreMenos5Letras.join(','));

//Ejercicio 2
const productos = [
    {nombre: 'Laptop', precio: 1000},
    {nombre: 'Mouse', precio: 25},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Audifono', precio: 75}
];
let productoPrecioMayorIgualA50= productos.filter((producto)=>producto.precio >= 50);
console.log(productoPrecioMayorIgualA50);
let nombreProductoPrecioMayorIgualA50 = productoPrecioMayorIgualA50.map((producto)=>producto.nombre);
console.log('Los productos:' + nombreProductoPrecioMayorIgualA50.join(','));
let precioTotalProductosElegidos = productoPrecioMayorIgualA50.reduce((acum, producto)=>acum + producto.precio, 0);
console.log('El total del precio del valor de los productos es:' + precioTotalProductosElegidos);

//Ejercicio 3
const movies = [
    {titulo: 'El señor de los anillos', duracion: 200},
    {titulo: 'Inception', duracion: 148},
    {titulo: 'Matrix', duracion: 136},
    {titulo: 'Toy Story', duracion: 81},
    {titulo: 'Coco', duracion:105}
];

let peliculaCorta = movies.reduce((acum, elemento)=>elemento.duracion < acum.durecion ? elemento: acum);
console.log('La película con la duración más corta es:'+ peliculaCorta);

let tituloMasLargo = movies.reduce((pelicula)=>pelicula.titulo.length > 10);
console.log('Película con el titulo de más de 10 caracteres');
tituloLargo.forEach ((pelicula)=> console.log(pelicula.titulo));
tituloLargo.forEach ((pelicula)=> console.log(pelicula.titulo.toLowerCase));