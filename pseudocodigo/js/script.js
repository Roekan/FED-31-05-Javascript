const prompt = require("prompt-sync")();


/*1. Diseñar el pseudocódigo de un programa que sume dos números leídos por pantalla y
muestre el resultado por terminal.*/

// let num1 = Number(prompt('Introduzca un numero'));
// let num2 = Number(prompt('Introduzca otro numero'));
// let res1 = num1 + num2;

// console.log('Ejercicio 1');
// console.log('Resultado: ' + res1);

/*2. Hacer el pseudocódigo de un programa que permita leer 2 números diferentes y nos
diga cual es el mayor de los 2 números.
*/

// let num1 = Number(prompt('Introduzca un numero'));
// let num2 = Number(prompt('Introduzca otro numero'));

// let res2 = '';

// if(num1<num2){
// res2 = num2 + ' Es el numero mayor';
// }else if(num1>num2){
//     res2 = num1 + ' Es el numero mayor';
// }else{
//     res2 = 'Los dos numeros son iguales';
// }

// console.log('Ejercicio 2');
// console.log('Resultado: ' + res2);

/*3. Crear el pseudocódigo de un programa que almacene 3 números en 3 variables A, B y
C. El diagrama debe decidir cuál es el mayor y cuál es el menor.*/

// let a = Number(prompt('Introduzca el numero A'));
// let b = Number(prompt('Introduzca el numero B'));
// let c = Number(prompt('Introduzca el numero C'));

// if(a>b && a>c && b>c){
//     console.log(`El mayor es ${a} y el menor es ${c}`)
// }else if(a>b && a>c && b<c){
//     console.log(`El mayor es ${a} y el menor es ${b}`)

// }else if(b>a && b>c && a>c ){
//     console.log(`El mayor es ${b} y el menor es ${c}`)
// }else if(b>a && b>c && c>a){
//     console.log(`El mayor es ${a} y el menor es ${b}`)

// }else if(c>a && c>b && a>b ){
//     console.log(`El mayor es ${c} y el menor es ${b}`)
// }else if(c>a && c>b && b>a){
//     console.log(`El mayor es ${c} y el menor es ${a}`)
// }

/*4. Realizar el pseudocódigo de un programa que nos calcule la hipotenusa de un triángulo
rectángulo, conocidos sus dos catetos.*/

// let cat1 = Number(prompt('Introduzca el Cateto 1'));
// let cat2 = Number(prompt('Introduzca el Cateto 2'));

// let res4 = Math.sqrt((cat1*cat2)/2)

// console.log(`La hipotenusa es: ${res4}`)

/*5. Realiza el pseudocódigo de un programa que sume 10 números leídos por teclado.*/

// let res5=0;

// for(let i=0;i<10;i++){
//     res5 += Number(prompt(`Introduzca numero ${i+1}`));
// }

// console.log(`La suma total es: ${res5}`)

/*6. Modificar el anterior para que permita sumar N números. El valor de N se debe leer
previamente por teclado.*/

//  let cant = Number(prompt('Introduzca cantidad de numeros'))

//     let suma =0;

// for(let i=0;i<cant;i++){
//     suma += Number(prompt(`Introduzca numero ${i+1}`));
// }

// console.log(`La suma total es: ${suma}`);

/*7. Hacer el pseudocódigo de un programa que permita escribir los 100 primeros pares.*/

// let numero = 1;
// let par = 0;
// let contador=0;

// do {
//   if (numero % 2 == 0) {
//     console.log(numero);
//     par += 1;
//     contador++;
//   }
//   numero++;

// } while (par < 100);

// console.log('Contador: ' + contador)






/*8. Diseña el pseudocódigo necesario para sumar los N primeros impares. Realizar después
uno que haga lo mismo con los pares y otro con los múltiplos de 3. Crea un menú para
ello.*/

// let opt=''
// opt = prompt('Introduzca el numero de la opcion que quiere sumar: "1.IMPARES", "2.PARES" o "3.MÚLTIPLOS DE 3"');
// let cantidad = Number(prompt('Introduzca la cantidad de números'));
// let contador =1;
// let numeros=1;


// /*Seguro */
// if(cantidad == 0){
//     cantidad = 1;
// }


// if(opt==1){
//     /*IMPARES */
//     let suma=0;
//     do{
//     if(numeros%2!=0){
//         suma+=numeros;
//         console.log('NUMEROS: ' + numeros);
//         contador++
//     }
//     numeros++;
//     }while(contador<=cantidad);
//     console.log('SUMA: ' + suma);
// }else if(opt==2){
//     /*PARES */
//     let suma=0;
//     do{
//     if(numeros%2==0){
//         suma+=numeros;
//         console.log('NUMEROS: ' + numeros);
//         contador++
//     }
//     numeros++;
//     }while(contador<=cantidad);
//     console.log('SUMA: ' + suma);
// }else if(opt==3){
//     /*MULTIPLOS DE 3 */
//     let suma=0;
//     do{
//     if(numeros%3==0){
//         suma+=numeros;
//         console.log('NUMEROS: ' + numeros);
//         contador++
//     }
//     numeros++;
//     }while(contador<=cantidad);
//     console.log('SUMA: ' + suma);

// }else{
//     console.log('Debe introducir una opción válida');
// }





/*9. Hacer el pseudocódigo de un programa que simule un reloj.*/



// let hora=12;
// let min=59;
// let seg=50;


// const reloj= () => {
    
//     seg++;

//     if(seg>59){
//         min++;
//         seg=0
//     }

//     if(min>59){
//         hora++;
//         min=0;
//     }

//     if(hora>23){
//         hora=0;
//     }

//     console.log(`Hora: ${hora}:${min}:${seg}` )
//     }

//     setInterval(reloj, 1000)



/*10. Define un diagrama de flujo que lea N números pedidos al usuario, calcule y escriba la
suma de los pares y el producto de los impares.*/


// let cantidad = Number(prompt('Introduzca la cantidad de números'));
// let numero=0;
// let par=0;
// let impar=1;

// for(let i=0;i<cantidad;i++){

//     numero = Number(prompt(`Introduzca el numero ${i+1}`));

//     if(numero%2==0){
//         par+=numero;
//     }else{
//         impar *=numero;
//     }

// }

// console.log(`Pares sumados: ${par}`);
// console.log(`Impares multiplicados: ${impar}`);



/*11. Un año es bisiesto si es múltiplo de 4, exceptuando los múltiplos de 100, que sólo son
bisiestos cuando son múltiplos además de 400, por ejemplo, el año 1900 no fue bisiesto,
pero el año 2000 sí lo será. Hacer el pseudocódigo de un programa que dado un año A nos
diga si es o no bisiesto.*/

// let anio = Number(prompt('Introduzca el año'));

// if(anio%4==0 && anio%100!=0 || anio%400==0){
//     console.log(`El año ${anio} es bisiesto`)
// }else{
//     console.log(`El año ${anio} no es bisiesto`)
// }


/*12. Realiza el pseudocódigo de un programa que simule una caja registradora.*/

// let numero;
// let res=0;

// do{
//     numero= Number(prompt('Introduzca un numero, para calcular el resultado escriba un numero negativo'));
//         res+=numero;
//         console.log(` + ${numero}`);
//         console.log(` Total: ${res}`);
// }while(numero>0);




/*13. Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un
algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final
las dos variables (recuerda la asignación).*/


// let a = Number(prompt('Introduzca la variable numérica A'));
// let b = Number(prompt('Introduzca la variable numérica B'));
// let aux;
// console.log(`Entrada`);
// console.log(`Variable A ${a}`);
// console.log(`Variable B ${b}`);

// aux=a;
// a=b;
// b=aux;
// console.log(`Salida`);
// console.log(`Variable A ${a}`);
// console.log(`Variable B ${b}`);


/*17. Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo,
debe imprimir el producto de los tres y si no lo es, imprimirá la suma.*/




// let a = Number(prompt('Introduzca el número A'));
// let b = Number(prompt('Introduzca el número B'));
// let c = Number(prompt('Introduzca el número C'));
// let res

// if(a<0){
// res=a*b*c
// }else{
// res=a+b+c
// }

// console.log(`Resultado: ${res}`)



/*18. Realizar un algoritmo que lea un número por teclado. En caso de que ese número sea 0
o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es
mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el
número que ha tecleado el usuario y su resultado (“Del número X, su potencia es X y su
raíz X”). Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X) o con una
potencia de 0,5.*/


// let numero = Number(prompt('Introduzca un número'));


// if(numero<=0){
//     console.log("Error")
// }else{
//     let cuadrado = Math.pow(numero, 2)
//     let raiz = Math.sqrt(numero)

//     console.log(`Numero: ${numero}`);
//     console.log(`Cuadrado ${cuadrado}`);
//     console.log(`Raiz: ${raiz}`);

// }


/*19. Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el
curso actual. Diseñar un algoritmo para este propósito (recuerda que para calcular el
porcentaje puedes hacer una regla de 3).*/

// let chicas = Number(prompt('Introduzca cantidad de niñas'));
// let chicos = Number(prompt('Introduzca cantidad de niños'));

// let total = Number(chicas + chicos);

// let porcentaje_chicas=(chicas/total)*100;
// let porcentaje_chicos=(chicos/total)*100;

// console.log(`Chicas: ${porcentaje_chicas}%`)
// console.log(`Chicos: ${porcentaje_chicos}%`)



/*20. Una tienda ofrece un descuento del 15% sobre el total de la compra durante el
mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se
debe cobrar al cliente.*/


// let mes= prompt('Introduzca el mes');
// mesMinusculas=mes.toLowerCase()
// let importe=Number(prompt('Introduzca importe'));
// let precio=0;


// if(mes == 'octubre'){
//     precio = importe-((importe/100)*15);
// }else{
//     precio= importe;
// }

// console.log(`Mes: ${mesMinusculas}`)
// console.log(`Importe: ${importe}`)
// console.log(`Precio: ${precio}`)


/*21. Realizar un algoritmo que, dado un número entero, visualice en pantalla si es par
o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para
que un número sea par, se debe dividir entre dos y que su resto sea 0).*/


// let numero=Number(prompt('Introduzca numero'));
// let tipo ='es impar'

// if(numero===0){
// tipo='no es par ni impar';
// }else if(numero%2===0){
//     tipo='es par'
// }

// console.log(`El número ${numero} ${tipo}`)





/*22. Modificar el algoritmo anterior, de forma que, si se teclea un cero, se vuelva a
pedir el número por teclado (así hasta que se teclee un número mayor que cero)
(recuerda la estructura mientras).*/
// let numero= 0;
// do{

//     numero= Number(prompt('Introduzca numero'));
//     if(numero%2===0){
//         tipo='par'
//     }else{
//         tipo='impar'
//     }

// }while(numero<=0)

// console.log(`El número ${numero} es ${tipo}`)





/*23. Algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo
de grado superior o no. Para acceder a un grado superior, si se tiene un título de
bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba
de acceso.*/

// let titulo=prompt('¿Tienes titulo de bachillerato?');
// let tituloMinusculas=titulo.toLocaleLowerCase();
// let prueba=prompt('¿Has aprobado una prueba de acceso?');
// let pruebaMinusculas=prueba.toLocaleLowerCase();

// let puede='No puedes';

// if(tituloMinusculas == 'si' || pruebaMinusculas== 'si'){
//     puede='Puedes';
// }
// console.log(`${puede} acceder a cursar un ciclo formativo de grado superior`)



/*24. Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números
naturales (recuerda la estructura desde-hasta).*/

// for(let i=1;i<=10;i++){
//     console.log(`El cuadrado de ${i} es ${Math.pow(i, 2)}`);
// }



/*25. Se pide representar el algoritmo que nos calcule la suma de los N primeros
números naturales. N se leerá por teclado (no tenemos por qué llamar a la
variable N, podemos llamarla como queramos).*/

// let cantidad=Number(prompt('Introduzca cantidad de numeros a sumar'))
// let suma=0;

// for(let i=1;i<=cantidad;i++){
//     suma +=i;
// }
// console.log(`El total de sumar desde 1 a ${cantidad} es: ${suma}`)


/*26. Se pide representar el algoritmo que nos calcule la suma de los N primeros números
pares. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.*/


// let input=Number(prompt('Introduzca numero'))
// let final = input*2;
// let suma=0;



// for(let i=0;i<=final;i++){

//     if(input%2==0){
//         suma+=input;
//     }

//     input++
// }

// console.log(`La suma total es ${suma}`);

/*27. Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo:
5,3,0,2,4,4,0,0,2,3,6, 0,...1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará números negativos.*/


// let numero= 0;
// let cant=0;
// let suma=0;
// let media=0;
// while(numero>-1){

//     numero= Number(prompt(`Introduzca numero ${cant +1}`));
//     if(numero>=0){
//         suma+=numero
//     cant++;

//     }
    
// }

// media=suma/cant

// console.log(`Media ${media}`)





/*28. Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una
clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un
mensaje indicándonos que hemos agotado esos 3 intentos (Recomiendo utilizar un
interruptor). Si acertamos la clave, saldremos directamente del programa.*/


// let intentos=0;
// let clave
// do{

//     clave=prompt('Introduzca la contraseña')
//     intentos++;

//     if(clave=='eureka'){
//         break;
//     }

// }while(intentos<3)

// if(clave=='eureka'){
//     console.log('Has acertado la clave');
// }else{
//     console.log('Has agotado tus intentos');
// }




/*29. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el
mínimo y la media de todos ellos. Piensa cómo debemos inicializar las variables.*/

let numero= 0;


// /*Media */
// let cant=0;
// let suma=0;
// let media=0;
// /*MAX */
// let max=0;
// /*MIN */
// let min=0;

// do{

//     numero= Number(prompt(`Introduzca numero ${cant +1}`));

//     if(numero>=0){
//         suma+=numero
//     cant++;
//     }

//     if(numero>max){
//         max=numero;
//     }

//     if(numero<min){
//         min=numero;
//     }

// }while(numero<0 || numero>0);

// media=suma/cant
// console.log(`Máximo ${max}`)
// console.log(`Mínimo ${min}`)
// console.log(`Media ${media}`)



/*30. Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que
hay entre 1 y 100.*/

// console.log(`Multiplos de 2`)

// for(let i=1;i<=100;i++){

//     if(i%2==0){
//         console.log(`${i}`)
//     }

// }

// console.log(`Multiplos de 3`)

// for(let i=1;i<=100;i++){
//     if(i%3==0){
//         console.log(`${i}`)
//     }
// }

/*31. Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se
calcula según el siguiente criterio: la parte práctica vale el 10%; la parte de problemas
vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres
notas, escribirá el resultado y volverá a pedir los datos del siguiente alumno hasta que el
nombre sea una cadena vacía. Las notas deben estar entre 0 y 10, si no lo están, no
imprimirá las notas, mostrará un mensaje de error y volverá a pedir otro alumno.*/


// let practica = Number(prompt('Introduce la nota práctica'));/*10*/
// let problemas = Number(prompt('Introduce la nota de problemas'));/*50*/
// let teorica = Number(prompt('Introduce la nota teorica'))/*40*/

// let errorNota = false;

// if(practica>10 || practica<0 || problemas>10 || problemas<0 ||teorica>10 ||teorica<0){
//     errorNota = true;
// }




// if(errorNota==false){

//     let porcentajePractica=  (((practica*100)/10)/100)*1;
//     let porcentajeProblemas=  (((problemas*100)/10)/100)*5;
//     let porcentajeTeorica=  (((teorica*100)/10)/100)*4;

//     let notaTotal = porcentajePractica + porcentajeProblemas + porcentajeTeorica;

//     console.log(`Nota total ${notaTotal}`);
// }



