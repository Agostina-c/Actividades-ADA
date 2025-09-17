//Ejercicio 1
let listaPersonajes = ['Link', 'Zelda'];
listaPersonajes.push('Mario', 'Luigi');
console.log('La lista de los personajes avaba de ser actualizada' + listaPersonajes);

//Ejercicio 2
let listaInvitados = ['Ana', 'Juan', 'Carlos', 'Sofía'];
let eliminarInvitados = listaInvitados.pop();
console.log('La lista de invitados' + listaInvitados + 'ha sido actualizada' + eliminarInvitados);

//Ejercicio 3
let listaMascota = ['Perro', 'Gato', 'Conejo'];
listaMascota.unshift('Hamster');
console.log('Ahora el primero a ser atendido será:' + listaMascota[0]);
let atencionMascota = listaMascota.shift();
console.log('La lista está actualizada' + listaMascota);

//Ejercicio 4
let unionDePalabras = ["JavaScript", "es", "divertido"];
let fraseArmada = unionDePalabras.join('');
console.log(fraseArmada);

//Ejercicio 5
let listaColores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
let indexOfBlue = listaColores.indexOf ('Azul');
console.log('El indice del color azul es:' + indexOfBlue);

//Ejercicio 6
 let listaNumeros = [2, 5, 7, 2, 8, 7];
let ultimoIndexOfSeven=listaNumeros.ultimoIndexOf(7);
console.log('El indice del número 7 es:'+ ultimoIndexOfSeven);

//Ejercicio 7
let listaComida=['Pizza', 'Hamburguesa', 'Tacos'];
if(listaComida.includes('Sushi')){
    console.log('En la lista de comida está incluido el sushi');
}
else{
    console.log('No está incluido');
}

//Ejercicio 8
let frase= 'Los gatos son geniales'
let extraido = frase.slice(4, 9);
console.log(extraido);

//Ejercicio 9
let fraseConEspacio = ' Hola mundo! '
let fraseSinEspacio = fraseConEspacio.trim();
console.log(fraseSinEspacio);

//Ejercico 10
let frase ='Me gusta el invierno';
let fraseCambiada = frase.replace('invierno', 'verano');
console.log(fraseCambiada);

//EJERCICIOS EXTRAS
//Ejercicio 1
let inventario = ['Laptop', 'Teclado', 'Mouse', 'Monitor'];
let nuevoInventario = inventario.push('Impresora');
console.log(inventario);
if(inventario.includes('Tablet')){
    console.log('Table, se ecuentra en el inventario');
}
else{
    console.log('Tablet, no se encuentra en el inventario');
}
let inventarioEliminado = inventario.shift();
console.log(inventarioEliminado);
let inventarioActualizado = inventario.join(',');
console.log(inventarioActualizado);

//Ejercicio 2
let oracion = 'JavaScript es un lenguaje poderoso y versátil';
let arrayOracion = oracion.split('');
console.log(arrayOracion);
let palabrasCortas = arrayOracion.filter(palabra => palabra.length < 5);
console.log('las palabras que tienen menos de 5 letras son:' + palabrasCortas);
let palabrasLargas = arrayOracion.filter(palabra => palabra.length >= 5);
console.log('Las palabras que tienen más de 5 letras son:' + palabrasLargas);

//Ejercicio 3
let colaCLientes = ['Ana', 'Carlos', 'VIP', 'Sofía', 'Juan'];
console.log('Lista de espera:' + colaCLientes);
console.log('clientes VIP' + colaCLientes.indexOf('VIP'));
for(let i = 0; i < colaCLientes.length; i++){
    if(colaCLientes [i]=='VIP'){
        console.log('El cliente VIP tiene prioridad y pasa primero');
    }
    else{
        console.log(colaCLientes[i]);
    }
}
console.log('Cantidad de clientes atendidos es:'+ colaCLientes.length);