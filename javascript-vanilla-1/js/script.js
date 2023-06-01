const prompt = require("prompt-sync")();

/*1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.*/

// let a = Number(prompt('Introduzca variable A'));
// let b = Number(prompt('Introduzca variable B'));


//     if(a>b){
//         console.log(`${a} es mayor que ${b}`);
//     }else if(a<b){
//         console.log(`${a} es mayor que ${b}`);
//     }else{
//         console.log(`${a} y ${b} son iguales`);
//     }



/*2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.*/


// let nombre = 'Álvaro';
// console.log(`Bienvenido ${nombre}`);



/*3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
(recuerda usar prompt).


// let nombre = prompt('Introduzca su nombre');
// console.log(`Bienvenido ${nombre}`);



/*4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.*/


// let radio = Number(prompt('Introduzca el tamaño del radio en cm'));
// let area = Number(Math.PI) * Number(Math.pow(radio,2));

// console.log(`El area del círculo es: ${area}`)

/*5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo.*/

// let numero = Number(prompt('Introduzca un número'));

// if(numero%2===0){
//     console.log('El numero es par')
// }else{
//     console.log('El numero es impar')
// }

/*6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%*/

// let precio = Number(prompt('Introduzca el precio'));

// let iva = 0.21 * precio;
// let total= precio + iva
// console.log(`Total: ${total}`)

/*7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.*/

// let numeros=1;

// while(numeros<=100){
//     console.log(numeros);
//     numeros++;
// }



/*8. Haz el mismo ejercicio anterior con un bucle for.*/

// for(let i = 1;i<=100;i++){
//     console.log(i)
// }




/*9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
que desees.*/

// console.log(`Divisibles entre 2`)
// for(let i = 1;i<=100;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// console.log(`Divisibles entre 3`)
// for(let i = 1;i<=100;i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }



/*10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.*/

// let cant = Number(prompt('Introduzca cantidad de ventas'));
// let numero=0;
// let suma=0;


// for(let i=0;i<cant;i++){
    
//     numero = Number(prompt('Introduzca venta'));
//     suma+=numero;
// }

// console.log(`El total es ${suma}`)






/*11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
o no. Usa un switch para ello.*/

// let dia = prompt('Introduzca un día de la semana');

// switch(dia.toLowerCase()){
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         console.log(`Es laborable`);
//         break;
//     case 'sabado':
//     case 'domingo':
//         console.log(`No es laborable`);
//         break;
//     default:
//         console.log(`Introduzca un día válido`);
// }


/*12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos).*/

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

/*13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
aritmético (String), según este último se realizará la operación correspondiente. Al final
mostrará el resultado en un cuadro de diálogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.*/

// console.log(`Los signos aritméticos disponibles son:`)
// console.log(`+: suma los dos operandos.`)
// console.log(`-: resta los operandos.`)
// console.log(`*: multiplica los operandos.`)
// console.log(`/: divide los operandos, este debe dar un resultado con decimales (double)`)
// console.log(`^: 1o operando como base y 2o como exponente.`)
// console.log(`%: módulo, resto de la división entre operando1 y operando2.`)

// let signo = prompt('Introduzca un signo: ')

// let a=Number(prompt('Introduzca número 1'))
// let b=Number(prompt('Introduzca número 2'))
// let res='';

// switch(signo){
//     case '+':
//         res= a+b;
//         break;
//     case '-':
//         res=a-b;
//         break;
//     case '*':
//         res=a*b;
//         break;
//     case '/':
//         res=a/b;
//         break;
//     case '^':
//         res=Math.pow(a,b);
//         break;
//     case '%':
//         res=a%b;
//         break;
//     default:
//         console.log('No ha introducido un operador válido');
// }

// if(res!=''){
//     console.log(`Resultado: ${res}`);
// }