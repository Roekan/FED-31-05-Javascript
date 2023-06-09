const prompt = require("prompt-sync")();

/*1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
devolverme solo el 5.*/

// let array=[1,2,3,4,5]

// let cant = -1;

// do{
//     cant = Number(prompt('Introduzca cantidad de numeros a devolver:  '))
// }while(cant<0)


// const ultElemento=(arr, c)=>{
//     let ultimo=''
//     if(c===undefined){
//         ultimo = arr.pop()

//     }else{
//         for(let i=0;i<c;i++){

//             ultimo += arr.pop() + ' ';
//         }
//     }

//     return ultimo
    
// }


// console.log(ultElemento(array))

// console.log(ultElemento(array,cant))

//Correccion

// let array = [0,2,5,8,9,2,1,4,8];

// const devuelveUltimo = (array, parametro = array.length-1) =>{
//     console.log(parametro);
    
//     if(parametros !==array.length-1){
//         return array.splice(array.length-parametro)
//     }else{
// return array[array.length - 1]
//     }
// }

// console.log(devuelveUltimo(array))


/*2. Escribe una función que, dado un array de números, devuelva una string con todos
esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2,
3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”*/

// let array = [1,3,5,6,8,10,11,12,13,14,16,18]
// const guionesPares = (a)=>{

// let string='';

//     for(let i=0;i<a.length;i++){

//         string += a[i]
        
//         if(a[i]%2===0 && a[i+1]%2===0){
//             string+="-" 
//         }else{
//             string+=" " 
//         }

//     }
// return string


// }

// console.log(guionesPares(array));


/*3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente
y cuántas veces se ha repetido*/

// let arr = [3,3,3,2,2,2,1,1,4,5,5,1,1,1,6,8,3]



// const elementoFrecuente = (array) =>{
//     let arrayNuevo = []
//     let longitud=0;
//     let numMayor;

//     for(let i=0;i<array.length;i++){
//         if(!arrayNuevo.includes(array[i])){
//             arrayNuevo.push(array[i]);
//         }
//     }

//     //3,2,1,4,5,6,8

//     for(let i=0;i<arrayNuevo.length;i++){
//         let arrayNumero=array.filter(element => element ==arrayNuevo[i])
//         if(arrayNumero.length>longitud){
//             longitud = arrayNumero.length
//             numMayor= arrayNuevo[i];
//         }
//     }

//     console.log(longitud)
//     console.log(numMayor)
    


// }

// elementoFrecuente(arr);


/*4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
“hOLA”)*/


// let string = prompt('Introduzca un string:  ')
// let arrayOriginal = string.split('');
// let arrayCambiado=[];
// let letra

// for(let i=0;i<arrayOriginal.length;i++){
//     if(arrayOriginal[i]==arrayOriginal[i].toLowerCase()){
//         letra = arrayOriginal[i].toUpperCase();
//         arrayCambiado.push(letra)
//     }else if(arrayOriginal[i]==arrayOriginal[i].toUpperCase()){
//         letra = arrayOriginal[i].toLowerCase();
//         arrayCambiado.push(letra)
//     }else{
//         letra = ' ';
//         arrayCambiado.push(letra)
//     }
// }
// console.log(arrayCambiado.join(""))

/*5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
    28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por
    indicadores con el número de fila, es decir:
    Fila 1
    1
    2
    1
    24
    Fila 2
    8
    ...*/



// let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
//     28, 14], [3, 10, 26, 7]]


// let miniArray=[]

// for(let i =0;i<array.length;i++){

//     miniArray=array[i]
//         console.log(`Fila ${i+1}`)
//     for(let j=0;j<miniArray.length;j++){
//         console.log(miniArray[j])
//     }
// }



/*6. Escribe una función que devuelva los años bisiestos en cierto rango de años.*/

// let anioMin;
// let anioMax;
// let contador=0;

// do{
//     anioMin = parseInt(prompt('Introduzca año desde:   '))
// }while(anioMin<0)

// do{
//     anioMax = parseInt(prompt('Introduzca año hasta:   '))
// }while( anioMax<0)


// if(anioMin>anioMax){
//     let aux = anioMin;
//     anioMin=anioMax;
//     anioMax=aux;
// }


// for(let i=anioMin;i<=anioMax;i++){
//     if(((i%4==0)&&(anioMin%100!=0)) || anioMin%400==0){
//         contador++;
//     }
// }

// console.log(`Desde ${anioMin} hasta ${anioMax} hay ${contador} año/s bisiesto/s`)

/*7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del
array*/

// let array = ["NES", "PlayStation", "GameGear", "GameBoy", "Switch", "Spectrum", "GameBoy"]
// let eliminar = "GameBoy"
// ///----------solucion 1------
// // let posicion

// // let arrayMin=[]
// // let elementoMin=elemento.toLowerCase()

// // for(let i of array){
// //     arrayMin.push(i.toLowerCase())
// // }

// // do{

// // posicion= arrayMin.indexOf(elementoMin)
// // arrayMin.splice(posicion,1)

// // }while(posicion!=-1)

// //----------Solucion 2-------
// array = array.filter(element => element != eliminar)
// console.log(array)


/*8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
concatenados pero que elimine los elementos repetidos de los mismos.*/

// let array1 = ["a","b","c","r","t","p"]
// let array2 = ["z","r","a","k","t","o"]
// //Elementos repetidos = a r t

// const combinarSimplificar = (a1,a2)=>{
//     let concat = a1.concat(a2);
//     let arrayRes=[];
//     for(let i of concat){
//         if(!arrayRes.includes(i)){
//             arrayRes.push(i);
//         }
//     }
//     return arrayRes
// }

// console.log(combinarSimplificar(array1,array2))



/*9. Crea una función que determine si un array contiene cierto elemento, pasando ambos
como argumentos a la misma*/

// let arrayNuevo = ["Sega Megadrive", "Neo Geo", "Tubo Grafx"];
// const itIncludes = (array, word) => {
//     let res = array.includes(word)
//     return res
// }
// console.log(itIncludes(arrayNuevo, "Dreamcast"))



/*10. Escribe una función que rellene un array con un determinado número de elementos y
pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]*/

// let cant = parseInt(prompt('Introduzca longitud de array:   '))
// let num = parseInt(prompt('Introduzca numero de array:   '))



// const rellenarArray = (c,n) =>{
// let array=[]

//     for(let i = 0;i<c;i++){
//         array.push(n)
//     }
//     return array
// }

// console.log(rellenarArray(cant,num))

/*11. Escribe una función para intercambiar las posiciones de dos elementos en un array.*/



//Solucion Desestructuracion
// let myArray  = ['GATO','PERRO','PEZ','LOBO','JABALÍ'];

// let pos1 = parseInt(prompt('Introduzca posicion 1:   ')-1)
// let pos2 = parseInt(prompt('Introduzca posicion 2:   ')-1)

// [myArray[pos1], myArray[pos2]] = [myArray[pos2], myArray[pos1]];

// console.log(myArray);


//Solucion Simple

// let array = ["GATO","PERRO","PEZ","LOBO","JABALÍ","MEDUSA","LAGARTO","SERPIENTE"]
// const intercambiarPosiciones = (arr,p1,p2) =>{

// let el1= arr[p1]
// let el2= arr[p2]

// arr.splice(p1,1,el2)
// arr.splice(p2,1,el1)

// return arr
// }

// console.log(array)



/*12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
deseado.*/

// let numInicial = parseInt(prompt('Introduzca un numero inicial:    '))
// let largo = parseInt(prompt('Introduzca el largo del array:    '))

// const formarArray=(num,l)=>{
// let array=[]

//     for(i=0;i<l;i++){
//         array.push(num)
//         num++;
//     }
// return array;

// }

// console.log(formarArray(numInicial,largo))


/*13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
ese array son números y devuelva la suma de los mismos.*/

// let array= [0,50,"j","180","e","perro"," "]


// const descubreSumaNumeros=(arr)=>{
// let suma = 0;

//     for(let i of arr){
//         if(!isNaN(Number(i)) ){
//             suma+=Number(i);
//             console.log(Number(i))
//         }
//     }
//     return suma
//     }

// console.log(descubreSumaNumeros(array))



/*14. Escribe una función que determine la palabra más larga de una string*/

// let string = 'No me da la vida para hacer todos los ejercicios';


// const descubrirPalabraLarga = (s)=>{
// let arr = s.split(" ")
// let long=0;
// let larga
//     for(let i of arr){
//         if(i.length>long){
//             long=i.length;
//             larga=i;
//         }
//     }
// return larga;
// }

// console.log(descubrirPalabraLarga(string))




/*15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
resultado*/

// let string = '¿Cuantas vocales hay en esta frase?' //12


// const contarVocales=(s)=>{
// let cant = 0;
// let arr = (s.toLowerCase()).split("")

//     for(let i of arr){
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//             cant++;
//         }
//     }

//     return cant;

// }

// console.log(contarVocales(string))


/*16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
de caracteres que quieres que tenga la contraseña.*/

// let cantidad = parseInt(prompt('Introduzca una cantidad de caracteres:    '))

// console.log(cantidad)

// const passRandom=(cant)=>{
//     let num = 0;
//     let caracteres = ["q","w","e","r","t","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m"]
//     let pass="";

//     for(let i=0; i<cant;i++){
//         num = Math.floor(Math.random()*25)
//         pass+=caracteres[num];
//     }
//     return pass
// }
// console.log(passRandom(cantidad))





/*17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
cada segundo y minuto entre ambas.*/



// const reloj=()=>{

// let seg = 0;
// let min =58;
// let h= 23

//     do{
//     console.log(`Hora:  ${h}:${min}:${seg}`)
//     seg ++
//         if(seg>=60){
//             seg=0;
//             min++;
//         }

//         if(min>=60){
//             min=0;
//             h++
//         }

//         if(h>=24){
//             h=0;
//         }

//     }while(seg!=1 || h!=0)

// }

// reloj()



/*18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
parámetro el objeto y la propiedad en cuestión) */


// let coche ={
//     marca: 'VolksWagen',
//     modelo:'golf',
//     matricula:'1234WWW',
//     km:30.000,
// }

// let propiedad = 'modelo';

// if(coche.hasOwnProperty(propiedad)){
//     console.log(`El objeto coche tiene la propiedad ${propiedad}`)
// }else{
//     console.log(`El objeto coche no tiene la propiedad ${propiedad}`)
// }




/*19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean*/





/*20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
cualquier cantidad de notas como parámetro*/
/*21. Escribe una función que reciba un array de números como argumento y saque la diferencia
entre el número más alto y el más bajo del mismo. Utiliza el operador …*/
/*22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
en que cada objeto contiene toda la información de cada persona.*/
/*23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
menos la edad. Hazlo utilizando el operador ...*/
/*24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
primera letra de cada uno sea mayúscula y el resto minúsculas*/
/*25. Crea un array con únicamente los nombres de los siguientes objetos
let personas = [
 { nombre: "Mara", edad: 30 },
 { nombre: "Pablo", edad: 35 },
 { nombre: "Juan", edad: 26 },
 { nombre: "Marta", edad: 56 },
 { nombre: "Rodrigo", edad: 31 },
];
Además, saca un array únicamente con los nombres de los mayores de 30*/
/*26. Dado un array de números, crea una función que sume solo los pares*/
/*27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string*/
/*28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
let estudiantes = [
 { nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
 { nombre: 'David', notas: [6, 2, 5, 10, 7] },
 { nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
 { nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
];*/