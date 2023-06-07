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

// let array1= [1,2,3]
// let array2= [4,5,6]

// const intercalarArray = (a1,a2) =>{
//     let arrayRes=[]

//     for(let i=0;i<a1.length;i++){
//         arrayRes.push(a1[i]);
//         a1.splice(i,1,"");
//         arrayRes.push(a2[i]);
//         a2.splice(i,1,"");

//     }


//     console.log(`Array1: ${a1}`)
//     console.log(`Array2: ${a2}`)
//     console.log(`Array resultado: ${arrayRes}`)

// }

// intercalarArray(array1,array2)




/*6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
uno para pares y otro para impares. A continuación, saca por consola ambos arrays
resultantes concatenados.*/

// let numeros=[15,18,22,23,64,47,79,92,21,6];

// const mostrarPareseImpares = (nums)=>{

//     let pares=[];
//     let impares=[];
//         for(let num of numeros){
//             if(num%2==0){
//                 pares.push(num);
//             }else{
//                 impares.push(num)
//             }
//         }   
//         console.log(`Pares: ${pares}`)
//         console.log(`Impares: ${impares}`)
// }

// console.log(`Array Original  ${numeros}`)
// mostrarPareseImpares(numeros);




/*7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
únicamente los números mayores que 5.*/

// let numeros=[5,8,2,3,4,7,9,1,6];
//     const mayor5 = (nums) =>{

//         for(let n of nums){
//             if(n>5){
//                 console.log(n)
//             }
//         }

//     }
// mayor5(numeros);

/*8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento
y lo saque por consola.*/

// let javascript1 =["DOM", "BOM", "Funciones", "Arrays"];
// let javascript2 =["Objetos", "Arrays", "ParseInt"];

// const repetidos=(js1,js2) =>{

//     for(let i of js1){
//         for (let j of js2){
//             if(i==j){
//                 console.log(`Se repite la palabra: ${i}`)
//             }
//         }
//     }

// }

// repetidos(javascript1,javascript2);




/*9. Imagina que estamos en una carrera y los nombres de las personas que van llegando a la
meta se van almacenando en un array (el primero quedaría en la primera posición del array,
el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres.
Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador,
al segundo y al resto de competidores por separado.*/

// let competidores= ['Bryan', 'Peter', 'Chris', 'Lois', 'Meg']

// const ordenar = ([primero, segundo, ...resto])=>{
//     console.log(`El ganador es: ${primero}`)
//     console.log(`El segundo es: ${segundo}`)
//     console.log(`El resto es: ${resto}`)

// }
// ordenar(competidores);



/*10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
nombre completo (nombre y apellidos) de la persona a modo de string.*/

// let persona = {
//     nombre:'Peter',
//     apellidos:'Grifin',
//     ciudad:'Petertopia',
//     pais:'Estados Unidos',
// }

// const pintar=(p)=>{

//     console.log(`El nombre es: ${p.nombre} ${p.apellidos}.`)
//     console.log(`Vivo en: ${p.ciudad} que está en ${p.pais}.`)

// }

// pintar(persona);

/*11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a
tres de esas propiedades.*/

//     let persona = {
//         nombre:'Peter',
//         apellidos:'Grifin',
//         ciudad:'Petertopia',
//         pais:'Estados Unidos',
//     }

// const {
//     nombre,
//     apellidos,
//     ciudad,
// } = persona



//     console.log(`El nombre es :   ${nombre}`)
//     console.log(`El apellido es :   ${apellidos}`)
//     console.log(`La ciudad es :   ${ciudad}`)

/*12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al
menos tres) y distintos valores. Crea una función que saque por consola el valor de una de
las propiedades para todos los objetos.*/



// let arrayObjetos=[{ nombre:'jarron', color:'rojo', material:'arcilla',},{nombre:'vaso',color:'ninguno',material:'plastico',},{nombre:'plato',color:'blanco',material:'porcelana',
// }]


// const mostrarPropiedad = (arr) =>{
//     for(let i of arr){
//         console.log(`El nombre es: ${i.nombre}`)
//     }
// }

// mostrarPropiedad(arrayObjetos);

/*13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola el
nombre, el tiempo y una lista de los ingredientes.*/


// let receta = {
//     nombre:'Tarta de zanahoria',
//     tiempo:40,
//     ingredientes:['zanahoria','harina','mantequilla','azucar', 'queso crema', 'huevo', 'nuez moscada'],
// }


// const mostrarReceta=(r)=>{
//     console.log(`Titulo: ${r.nombre}`);
//     console.log(`Tiempo: ${r.tiempo}`);
//     console.log(`Ingredientes: ${r.ingredientes}`);
// }

// mostrarReceta(receta);


/*14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
saca por consola todas las recetas de tu array.*/

// const mostrarReceta=(r)=>{
//     console.log(`Titulo: ${r.nombre}`);
//     console.log(`Tiempo: ${r.tiempo}`);
//     console.log(`Ingredientes: ${r.ingredientes}`);
// }

// let tartaZanahoria = {
//     nombre:'Tarta de zanahoria',
//     tiempo:40,
//     ingredientes:['zanahoria','harina','mantequilla','azucar', 'queso crema', 'huevo', 'nuez moscada'],
// }

// let tartaQueso = {
//     nombre:'Tarta de Queso',
//     tiempo:30,
//     ingredientes:['harina','mantequilla','azucar', 'queso crema', 'huevo', 'nuez moscada', 'mermelada'],
// }

// let hamburguesa = {
//     nombre:'Hamburguesa',
//     tiempo:20,
//     ingredientes:['carne','pan','lechuga','tomate', 'pepinillo', 'huevo', 'bacon'],
// }

// let arrayRecetas = [tartaZanahoria, tartaQueso, hamburguesa]

// for(let i of arrayRecetas){
//     mostrarReceta(i)
// }



/*15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
anterior para sacarlas por consola.*/


// class Receta{
//     constructor(nombre,tiempo,ingredientes){
//         this.nombre = nombre;
//         this.tiempo = tiempo;
//         this.ingredientes = ingredientes;
//     }
// }


// let tartaZanahoria= new Receta('Tarta de zanahoria',40,['zanahoria','harina','mantequilla','azucar', 'queso crema', 'huevo', 'nuez moscada'])
// let tartaQueso=new Receta('Tarta de Queso',30,['harina','mantequilla','azucar', 'queso crema', 'huevo', 'nuez moscada', 'mermelada'])
// let hamburguesa = new Receta('Hamburguesa',20,['carne','pan','lechuga','tomate', 'pepinillo', 'huevo', 'bacon'])

// let arrayRecetas = [tartaZanahoria,tartaQueso, hamburguesa];

// const mostrarReceta=(r)=>{
//     console.log(`Titulo: ${r.nombre}`);
//     console.log(`Tiempo: ${r.tiempo}`);
//     console.log(`Ingredientes: ${r.ingredientes}`);
// }

// for(let i of arrayRecetas){
//     mostrarReceta(i)
// }


