const prompt = require("prompt-sync")();


/*CONDICIONALES*/
/*1. Pedir dos números y decir si son múltiplos o no.*/

// let a = Number(prompt('Introduzca número '));
// let b = Number(prompt('Introduzca múltiplo '));


// if(a%b===0){
//     console.log(`${a} es múltiplo de ${b}`)
// }else{
//     console.log(`${a} no es múltiplo de ${b}`)
// }



/*2. Pedir dos números y decir cual es el mayor.*/

// let a = Number(prompt('Introduzca número 1'));
// let b = Number(prompt('Introduzca número 2'));

// if(a>b){
//     console.log(`${a} es mayor que ${b}`)
// }else if(b>a){
//     console.log(`${a} es menor que ${b}`)
// }else{
//     console.log(`${a} y ${b} son iguales`)
// }



/*3. Pedir un número y decir si es un número negativo, si es positivo o cero.*/

// let a = Number(prompt('Introduzca número'));

// if(a>0){
//     console.log(`El número ${a} es positivo`)
// }else if(a<0){
//     console.log(`El número ${a} es negativo`)
// }else{
//     console.log(`El número ${a} es 0`)
// }


/*4. Pedir un string y determinar si tiene cinco caracteres o más.*/

// let string =prompt('Introduzca un string');
// let longitud = string.length;

// if(longitud==5){
//     console.log(`${string} Tiene 5 caracteres`)
// }else if(longitud>5){
//     console.log(`${string} Tiene más de 5 caracteres`)
// }else{
//     console.log(`${string} Tiene menos de 5 caracteres`)
// }



/*5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
números y determinar si el promedio es mayor que cinco.*/

// let a = Number(prompt('Introduzca el primer número del 1 al 10:  '));
// let b = Number(prompt('Introduzca el segundo número del 1 al 10:  '));
// let c = Number(prompt('Introduzca el tercer número del 1 al 10:  '));

// if((a>=1 && a<=10) &&(b>=1 && b<=10) &&(c>=1 && c<=10)){

// let promedio = (a+b+c)/3;
//     console.log(`El promedio es: ${promedio}`);
// }else{
//     console.log(`Los números introducidos no son los correctos`)
// }




/*6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.*/


// let string = prompt('Introduzca un string:   ')

// let minusculas=string.toLowerCase();

// if(string===minusculas){
//     console.log(`El string está en minusculas`)
// }else{
//     console.log(`El string NO está en minusculas`)
// }


/*7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el número.*/

// let numAleatorio = Math.ceil(Math.random()*20))

// console.log(`El numero es: ${numAleatorio}  `);

// if(numAleatorio%2==0){
//     console.log(`Es par `);
// }else{
//     console.log(`Es impar `);
// }

/*8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado o no.*/


// let nota1 = Number(prompt('Introduzca la primera nota:  '))
// let nota2 = Number(prompt('Introduzca la segunda nota:  '))
// let nota3 = Number(prompt('Introduzca la tercera nota:  '))

// if((nota1>=0 && nota1<=10) &&(nota2>=0 && nota2<=10) &&(nota3>=0 && nota3<=10)){
//     let media = (nota1 + nota2 + nota3)/3


// console.log(`La nota es:  ${media}`)
//     if(media>=5){
//         console.log(`Has aprobado`)
//     }else{
//         console.log(`Has suspendido`)
//     }
// }else{
//     console.log(`Las notas introducidas no son válidas`)
// }

/*9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
pantalla.*/

// let marca = prompt('Introduzca la marca del coche:  ').toLowerCase();
// let modelo = prompt('Introduzca el modelo:  ').toLowerCase();
// let descuento = 0;

// if(marca == 'ford' && modelo == 'fiesta'){
// descuento = 5;
// }else if(marca == 'ford' && modelo == 'focus'){
//     descuento = 10;
// }
// console.log(`El descuento para ese coche es de ${descuento}%  `)



/*10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
código responda cuántos días tiene ese mes.*/

// let mes = prompt('Introduzca el mes (del 1 al 12):  ');
// let dias = 0;


// switch(mes){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 9:
//     case 11:
//         dias=31;
//         break;
//     case 2:
//         dias=28;
//         break;
//     default:
//         dias=30;
// }



// console.log(`El mes tiene ${dias} dias.`)

/*11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y
realice las siguientes operaciones:
a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
vehículo pequeño”.
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o
igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje
“El grosor para esta rueda es inferior al recomendado”*/


// let diametro = Number(prompt('Introduzca el tamaño del diámetro  '))
// let grosor = Number(prompt('Introduzca el tamaño del grosor en m '))

// if(diametro>1.4){
//     console.log(`La rueda es para un vehículo grande`)
// }else if(diametro<=1.4 && diametro>0.8){
//     console.log(`La rueda es para un vehículo mediano`)
// }else{
//     console.log(`La rueda es para un vehículo pequeño`)
// }

// if((diametro>1.4 && grosor<0.4) || (diametro<=1.4 && grosor<0.25)){
//     console.log(`El grosor para esta rueda es inferior al recomendado`)
// }




/*12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio
por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.*/


// let vehiculo = prompt('Introduzca el vehiculo (coche, moto, autobús):    ');
// let km = Number(prompt('Introduzca los km:  '))
// let precio = 0;
// let total = 0;

// if(vehiculo.toLowerCase()=='coche'){
//     precio = 0.10
// }else if(vehiculo.toLowerCase()=='moto'){
//     precio = 0.20
// }else if(vehiculo.toLowerCase()=='autobus'){
//     precio = 0.50
// }else{
//     console.log('Debe introducir un vehiculo válido')
// }

//     total=precio*km;

// console.log(`El total a pagar es de ${total}€`)





/*BUCLES*/

/*1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números
desde el 0 al valor tecleado. Los números se separarán por comas.*/


/*Manera 1 */
// let cantidad = Number(prompt('Introduzca un valor entero'));
// let numeros = [];

// for(let i=0;i<cantidad;i++){
//     numeros.push(i);
// }
// console.log(numeros)


/*Manera 2 */
// let cantidad = Number(prompt('Introduzca un valor entero'));


// for(let i=0;i<cantidad;i++){
//     console.log(`${i}, `)
// }


/*2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el
usuario. El usuario también ha de proporcionar N.*/

// let n = Number(prompt('¿De cuanto en cuanto quieres contar?   '));
// let m = Number(prompt('¿Hasta que número quieres contar? '));

// for(let i=0;i<=m;i+=n){
//     console.log(i);
// }



/*3. Genera una lista con todos los números pares positivos por debajo del número tecleado
por el usuario.*/

// let n = Number(prompt('Introduzca un número   '));

// for(let i = 1;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


/*4. Escribe la tabla de multiplicar de un número introducido por el usuario.*/

// let n = Number(prompt('Introduzca un número   '));

// for(let i=0;i<=10;i++){
//     console.log(`${n} X ${i} = ${i*n}`);
// }

/*5. Formar un triángulo de este estilo
*
**
***
*****/

// let n = '';

// for(let i=0;i<=10;i++){
//     n+='*';
//     console.log(n);
// }



/*6. Con la cantidad de líneas que indique el usuario.*/

// let cant = Number(prompt('Introduzca cantidad de *   '));

// let n = '';

// for(let i=0;i<=cant;i++){
//     n+='*';
//     console.log(n);
// }

/*7. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por
el usuario.*/

// let final = Number(prompt('Introduzca un numero   '));
// let suma=0;

// for(let i=1;i<=final;i++){
//     suma+=i
// }
// console.log(`El total es ${suma}`)




/*8. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa
deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de
números).*/
// let num=0;

// for(let i=0;i<4;i++){
//     num+= Number(prompt(`Introduzca numero ${i+1}   `));
// }
//     console.log(`La media total es: ${num/4}`);





/*8(bis). Saca por consola los números primos del 0 al número que introduzca un usuario por
prompt.*/

// let numero= Number(prompt(`Introduzca un numero    `));




//             const esPrimo =(num)=>{
                

//                 if(num == 0 || num == 1 || num == 4){
//                     return false;
//                 }
//                 for(let i=2;i<num;i++){
//                     if(num%i==0){
//                         return false;
//                     }
//                 }
//                 return true;
//             }

//             for(let j=2;j<=numero;j++){

//                 if(esPrimo(j)){
//                     console.log(`Primo: ${j}`)
//                 }
            
//             }
            

    




/*9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta
atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa
determine qué número es el mayor y cuente desde el mayor hasta el menor.*/

// let num1=0;
// let num2=0;

//     num1= Number(prompt(`Introduzca un numero 'desde'   `));
// do{
//     num2= Number(prompt(`Introduzca un numero 'hasta'   `));
// }while(num1==num2)


// if(num1>num2){

//         for(let i=num2;i<=num1;i++){
//         console.log(i);
//         }
// }else{
//     for(let i=num1;i<=num2;i++){
//         console.log(i);
//         }
// }





/*10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
todos los resultados.*/


// let array=[];
// let num=0;

// for(let i=1;i<=5;i++){
//     num= Number(prompt(`Introduzca numero ${i}   `));
//     array.push(num);
// }

// for(let j=0;j<5;j++){
//     array[j]= array[j]*3;
//     console.log(array[j]);
// }




/*FUNCIONES */

/*1. Crea una función que convierta grados celsius a grados fahrenheit.*/

// let opt =0
// let resultado
// do{
//      opt = Number(prompt('Introduzca opcion 1.C=>F 2.F=>C  '));
// }while(opt!=1 && opt!=2)

// let grados = Number(prompt('Introduzca cantidad de grados '));



// const convertir = (opcion,num) =>{
//     let res
//         if(opt==1){
//             res= (num * 9/5) + 32;
//         }else{
//             res= (num-32)  * 5/9;
//         }
//     return res;
// }

// resultado= convertir(opt,grados)

// console.log(`${resultado} grados`)



/*2. Crea una función que determine si un número es par o impar.*/

// let numero = Number(prompt('Introduzca numero '));

// const esPar=(num) =>{

//     if(num%2===0){
//         return true;
//     }else{
//         return false;
//     }
    

// }

// if(esPar(numero)){
//     console.log(`Es par`)
// }else{
//     console.log(`Es impar`)
// }





/*3. Crea una función que determine si un número es primo o no.*/


// let numero = Number(prompt('Introduzca numero '));


// const esPrimo =(num)=>{
                

//         if(num == 0 || num == 1 || num == 4){
//             return false;
//         }
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 return false;
//             }
//         }
//         return true;
//     }

//     if(esPrimo(numero)){
//         console.log(`Es primo`)
//     }else{
//         console.log(`No es primo`)
//     }


/*4. Crea una función que reciba un número de dni como parámetro, y devuelva la letra del
mismo. Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI
es [TRWAGMYFPDXBNJZSQVHLCKE].*/

// let numero = Number(prompt('Introduzca numero del DNI   '));
// let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
// let arrayLetras = letras.split('')
// let res;
//     const letraDni = (dni) =>{
//     let resto=Math.trunc(dni%23);
//     res=arrayLetras[resto];
//     }
// letraDni(numero)
// console.log(res)
/*5. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva
incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.*/

// let p = Number(prompt('Introduzca precio   '));
// let i = Number(prompt('Introduzca iva   '));

//     const calcularIva = (precio, iva) =>{

//         precio=(precio*(iva/100))+precio
//         return precio;

//     }
// console.log(`El total es ${calcularIva(p,i)}`)

/*6. Crea una función que determine si una letra es una vocal o una consonante.*/

// let letra= prompt('Introduzca una letra    ').toLowerCase() ;

// const comprobarVocal=(l) =>{
//     let vocales = ['a','e','i','o','u']
//     let res = 'Es consonante'

//     for(let i=0;i<vocales.length;i++){
//         if(l==vocales[i]){
//             res= 'Es vocal'
//         }
//     }
//     return res
// }

// console.log(comprobarVocal(letra))

/*7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O
en 0.*/


// let frase= prompt('Introduzca una frase    ').toLowerCase() ;

// const cambiarLetras=(f) =>{
//     let arrayFrase = f.split('')
//     let res = ''

//     for(let i=0;i<=arrayFrase.length;i++){
//         if(arrayFrase[i]=='a'){
//             arrayFrase[i]='4'
//         }
//         if(arrayFrase[i]=='e'){
//             arrayFrase[i]='3'
//         }
//         if(arrayFrase[i]=='i'){
//             arrayFrase[i]='1'
//         }
//         if(arrayFrase[i]=='o'){
//             arrayFrase[i]='0'
//         }
//     }

//     let fraseNumeros=arrayFrase.toString();


//     return fraseNumeros
// }


// console.log(cambiarLetras(frase))

/*8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.*/

// let frase= prompt('Introduzca una frase    ').toLowerCase() ;
// let letra= prompt('Introduzca una letra    ').toLowerCase() ;

// const contarLetras=(f,l) =>{
//     let cont=0;
//     let arrayFrase = f.split('')

//     for(let i=0;i<=arrayFrase.length;i++){
        
//         if(arrayFrase[i]==l){
//             cont++
//         }
//     }


//     return cont
// }

// console.log(`TIene ${contarLetras(frase,letra)} letras ${letra}`)


/*9. Crea una función que, dado un array de números, devuelva el número más grande del
mismo.*/

// const mayorDeArray = (arrayN) =>{

// let mayor=0;

//     for(let i=0;i<arrayN.length;i++){
//         if(arrayN[i]>mayor){
//             mayor = arrayN[i];
//         }
//     }
//     return mayor;
// }



// let cantArray= Number(prompt('Introduzca la cantidad de elementos que quiere en el array:   '))
// let arrayNumeros=[];
// let numero;


// for(let i=0;i<cantArray;i++){
//     numero = Number(prompt(`Introduzca un numero ${i+1}:   `));
//     arrayNumeros.push(numero);
// }

// console.log(mayorDeArray(arrayNumeros));




/*10. Crea una función que, dado un array de números, devuelva la suma de todos los
números que contiene.*/

// const sumaDeArray = (arrayN) =>{

//     let suma=0;
    
//         for(let i=0;i<arrayN.length;i++){
//             suma+=arrayN[i];
//         }
//         return suma;
//     }



//     let cantArray= Number(prompt('Introduzca la cantidad de elementos que quiere en el array:   '))
//     let arrayNumeros=[];
//     let numero;
//     for(let i=0;i<cantArray;i++){
//         numero = Number(prompt(`Introduzca un numero ${i+1}:   `));
//         arrayNumeros.push(numero);
//     }

// console.log(sumaDeArray(arrayNumeros))


/*11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un
número(A). */


// const calcularPorcentaje=(n,p) =>{
//     return  (n/100)*p;
// }



// let num= Number(prompt('Introduzca un numero:   '))
// let porcentaje= Number(prompt('Introduzca un porcentaje:   '))




// console.log(calcularPorcentaje(num,porcentaje));