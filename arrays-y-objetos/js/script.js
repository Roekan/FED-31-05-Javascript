const prompt = require("prompt-sync")();



/*1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array
y lo saque por consola.*/

// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
// const longArray = arr => arr.length;
// const randomElementArray = (arr) => {
//     let num=Math.round(Math.random()*8);
//     //console.log(`Numero aleatorio:  ${num}`)
//     return arr[num];

// }

// console.log(`Longitud del array:  ${longArray(array)}`)
// console.log(randomElementArray(array))





/*2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
los liste y los saque por consola.*/

// let array = ["Mercurio", "Venus", "La Tierra", "Marte", "Júpiter", "Satruno", "Urano", "Neptuno"]

// const mostrarPlanetas = array => array.forEach((element)=>console.log(`Planeta: ${element}`))

// mostrarPlanetas(array)


/*3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su
lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos
elementos. Obtén el índice del elemento "Funciones".*/

// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]

// console.log(`Array original ${javascript1}`)

// javascript1.shift()
// console.log(`Eliminar "DOM":   ${javascript1}`)

// javascript1.unshift('Objetos')
// console.log(`Añadir "Objetos":   ${javascript1}`)

// javascript1.pop()
// console.log(`Eliminar "Arrays":   ${javascript1}`)

// javascript1.push('ArraysDifíciles')
// console.log(`Añadir "ArraysDifíciles":   ${javascript1}`)

// let array2=javascript1.splice(2,2)

// console.log(`Ultimos elementos:   ${array2}`)

/*4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"*/

// let string = prompt('Introduzca un string:  ');
// let array = string.split('');
// array.reverse();
// console.log(array)


/*5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3]
y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]*/

//  let array1= [1,2,3]
//  let array2= [4,5,6]





// const intercalar=(arr1,arr2) =>{
//     let arrayRes = [];

//     for(let i=0;i<3;i++){
//         arrayRes.push(array1[i]);
//         arrayRes.push(array2[i]);
//     }
//     return arrayRes
// }

// console.log(intercalar(arrayRes))

/*5. SOLUCIONARLO CON SPLICE Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3]
y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]*/

//  let array1= [1,2,3]
//  let array2= [4,5,6]




/*6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
uno para pares y otro para impares. A continuación, saca por consola ambos arrays
resultantes concatenados.*/




/*7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
únicamente los números mayores que 5.*/

/*8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento
y lo saque por consola.*/

/*9. Imagina que estamos en una carrera y los nombres de las personas que van llegando a la
meta se van almacenando en un array (el primero quedaría en la primera posición del array,
el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres.
Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador,
al segundo y al resto de competidores por separado.*/

/*10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
    dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
    nombre completo (nombre y apellidos) de la persona a modo de string.*/

/*11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a
    tres de esas propiedades.*/

/*12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al
    menos tres) y distintos valores. Crea una función que saque por consola el valor de una de
    las propiedades para todos los objetos.*/

/*13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola el
nombre, el tiempo y una lista de los ingredientes.*/

/*14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
saca por consola todas las recetas de tu array.*/

/*15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
anterior para sacarlas por consola.*/

    







