
const prompt = require("prompt-sync")();
/*los parentesis vacios de la linea de arriba instancian el elemento despues de llamarlo */




/*1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Para ello has de crear un método por cada figura
para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado*/



// const areaCirculo = () =>{
//     let radio = Number(prompt('Introduzca radio del circulo:  '))
//     let area = ((radio * radio)*Math.PI).toFixed(2)
//     console.log(`El area del Circulo es: ${area}`)
// } 

// const areaTriangulo = (b,a) =>{
//     let base = Number(prompt('Introduzca  medida de la base:  '))
//     let altura = Number(prompt('Introduzca  medida de la altura:  '))
//     let area = ((base * altura)/2).toFixed(2);
//     console.log(`El area del Triangulo es: ${area}`)
// } 

// const areaCuadrado = (r) =>{
//     let lado = Number(prompt('Introduzca medida del lado:  '))
//     let area = (lado * lado).toFixed(2);
//     console.log(`El area del Cuadrado es: ${area}`)
// } 

// let figura=prompt('¿Que figura es? (circulo, cuadrado, triangulo):     ')
// let figMinusculas=figura.toLowerCase();


// switch(figMinusculas){
//     case 'circulo':
//         areaCirculo()
//         break;
//     case 'triangulo':
//         areaTriangulo()
//         break;
//     case 'cuadrado':
//         areaCuadrado()
//         break;
//     default:
//         console.log('No ha introducido una figura válida')
// }




/*2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
números queremos que los genere, podemos pedirlas al usuario antes de generar los
números. Este método devolverá un número entero aleatorio. Muestra estos números por
consola.*/

// const aleatorios = (min,max) =>{
//     return Math.random() * (max-min) + min;
//     }


// let cantidad= Number(prompt(`Diga la cantidad de numeros que quiere:    `))
// let min= Number(prompt(`Diga el menor numero que quiere:    `))
// let max= Number(prompt(`Diga el mayor numero que quiere:    `))

// if(min>max){
// let aux = min;
// min=max;
// max=aux;
// }

// for(let i=1;i<=cantidad;i++){
//     console.log(`Numero ${i}:  ${aleatorios(min,max).toFixed(0)} `);
// }




/*3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si es
primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.*/



// let numero = Number(prompt(`Introduzca un número:  `))

// const esPrimo =(num)=>{
                

//     if(num == 0 || num == 1 || num == 4){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// esPrimo(numero)  ? console.log(`${numero} es primo`) : console.log(`${numero} no es primo`) 



/*4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizará mediante un método al que le pasamos el número como parámetro. Para calcular
el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
introducimos un 5, realizará esta operación 5*4*3*2*1=120.*/

// let numero = Number(prompt(`Introduzca un número:  `))

//         const calcularFactorial =(num)=>{
//         let res = 1;

//             for(let i = num;i>=1;i--){
//                 res=res*i
//             }

//         return res;
//         }

// console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`)


/*5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un String
con el número convertido a binario. Para convertir un número decimal a binario, debemos
dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
no se pueda dividir más, el resto que obtengamos de cada división formará el número
binario, de abajo a arriba.*/


// let numero = Number(prompt(`Introduzca un número en base decimal:  `))

//         const aBinario =(num)=>{
//             let stringBinario = ' ';
//             let numDividido = num;
//                 stringBinario= numDividido.toString(2)
//             return stringBinario;
//         }

// console.log(`El numero ${numero} en binario es ${aBinario(numero)}`)


/*6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
el número por parámetro devolverá el número de cifras.*/

// let numero = Number(prompt(`Introduzca un número:  `))

//         const contadorCifras =(num)=>{
//             let numDividido = num;
//             let cont = 0;
//             while (numDividido>0){
//                 numDividido =Math.trunc((numDividido/10));
//                 cont++;
//             }
//             return cont;
//         }

// console.log(`El numero ${numero} tienes ${contadorCifras(numero)} cifra/s  `)

/*7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.

El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €
*/


// let moneda = (prompt(`Introduzca a que convertir (dolares, yenes, libras):    `)).toLowerCase();
// let euros = Number(prompt(`Introduzca cantidad de euros:    `));



// const conversorEuros =(m,e)=>{
    
//     let res = '';

//     switch(m){
//         case 'dolares':
//             res = e * 1.28611;
//             break;
    
//         case 'yenes':
//             res = e * 129.852;
//             break;

    
//         case 'libras':
//             res = e *0.86;
//             break;
//         default:
//             console.log('No ha introducido una divisa correcta')
//     }

//     return res;

//             }

// (conversorEuros(moneda,euros)!='') ? console.log(`${euros} euros son ${conversorEuros(moneda,euros)} ${moneda}. `) : console.log(`No ha introducido una divisa correcta`)





/*8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
rellenar valores y otro para mostrar.
 */

// let array = []


// const pedirValores = (arr) =>{

//     let num;

//     for(let i=0;i<10;i++){
//         num = Number(prompt(`Introduzca el número ${i+1}  `))
//         arr[i]=num;
//     }
//     return arr;
// }

// const mostrarValores = (arr) =>{

//     for(let i=0;i<10;i++){
//         console.log(`El numero ${i+1} es ${arr[i]}  `);
//     }

// }

// pedirValores(array);
// mostrarValores(array);



/*9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
y otro para mostrar el contenido y la suma del array.*/



// let cant = Number(prompt(`Introduzca cantidad de numeros  `))
// let arrayNumeros=[]



// const rellenarArray=(cant,arr)=>{
//         for(let i=0;i<cant;i++){
//         arr[i]=Math.round(Math.random()* 9)
//         }
    
//     return arr;
// }


// const mostrarArray=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         console.log(`El numero ${i+1} es: ${arr[i]}  `)
//     }
// }

// rellenarArray(cant,arrayNumeros)
// mostrarArray(arrayNumeros)





/*10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indica cuál es el
mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
hacer todos los métodos que necesites.
 */

// let cant = Number(prompt(`Introduzca cantidad de numeros  `))
// let max = Number(prompt(`introduce valor máximo`))
// let min = Number(prompt(`introduce valor mínimo`))
// let arrayNumeros=[]

// if(min>max){
//     let aux;
//     aux=min;
//     min=max;
//     max=aux;
// }




// const esPrimo =(num)=>{          
//     if(num == 0 || num == 1 || num == 4){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }



// const rellenarArray=(cant,arr,max,min)=>{
//     let numero
//     let primos=1;
    
//     do{
//         numero = Math.round(Math.random()* (max-min)+min);
//             if(esPrimo(numero)){
//                 arr.push(numero);
//                 primos++;
//             }
//     }while(primos<=cant)
    
//     return arr;
// }



// const calcularMayor=arr=>{
//     let mayor=0;

//     for(let i = 0;i<arr.length;i++){
//         mayor= (arr[i]>mayor) ?  arr[i] : mayor;
//     }
//     return mayor
// }



// const mostrarArray=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         console.log(`El numero ${i+1} es: ${arr[i]}  `)
//     }
// }




// rellenarArray(cant,arrayNumeros,max,min)
// mostrarArray(arrayNumeros)
// console.log(`El mayor de los numeros es: ${calcularMayor(arrayNumeros)}`)


/*11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
del segundo array con valores aleatorios. Después, crea un método que tenga como
parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 del
array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada
array.*/

// let cantidad = Number(prompt(`Introduzca cantidad del array:   `));

// let arrayOriginal = []
// let arrayCopia = []
// let arrayProducto = []


// const rellenarArrayOriginal=(cant,arr)=>{
//     for(let i=0;i<cant;i++){
//         arr[i]=Math.round(Math.random()*10);
//     }
//     return arr;
// }

// /*Metodo sencillo */
// // const rellenarArrayCopia=(arr1,arr2)=>{
// //     for(let i=0;i<arr1.length;i++){
// //         arr2[i]=arr1[i];
// //     }
// //     return arr2;
// // }

// const rellenarArrayProducto=(arr1,arr2,arr3)=>{
//     for(let i=0;i<arr1.length;i++){
//         arr3[i]=arr1[i]*arr2[i];
//     }
//     return arr3;
// }

// const mostrarArray=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         console.log(`El numero ${i+1} es: ${arr[i]}  `)
//     }
// }

// arrayOriginal = rellenarArrayOriginal(cantidad,arrayOriginal);
// /* Metodo Sencillo
// arrayCopia = rellenarArrayCopia(arrayOriginal,arrayCopia); 
// */
// arrayCopia = [...arrayOriginal]
// //arrayCopia = arrayOriginal

// arrayProducto = rellenarArrayProducto(arrayOriginal,arrayCopia,arrayProducto)


// console.log(`Array Original:  `)
// mostrarArray(arrayOriginal)

// console.log(`Array Copia:  `)
// mostrarArray(arrayCopia)

// console.log(`Array Producto:  `)
// mostrarArray(arrayProducto)



/*12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto),
estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le
indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.
 */


// let cantidad=0;
// let digito=0;

// do{
//     cantidad = Number(prompt(`Introduzca cantidad del array:   `));
// }while(cantidad<0);

// do{
//     digito = Number(prompt(`Introduzca dígito de 0 a 9:   `));

// }while(digito<0 || digito>9);



// let arrayOriginal = [];
// let arrayDigitos = [];

// const rellenarArrayOriginal=(cant,arr)=>{
//     for(let i=0;i<cant;i++){
//         arr[i]=Math.round(Math.random()*(100-1)+1);
//     }
//     return arr;
// }

// // const rellenarArrayDig=(arr,arrDig,dig)=>{

// //     // for(let i=0;i<arr.length;i++){
// //     //     if(arr[i]%10==dig){
// //     //         arrDig[i]=arr[i]
// //     //     }
// //     // }
// //     arr.forEach(num =>{
// //         if(num%10==dig){
// //         arrDig.push(num);
// //     }
// //     })
// //     return arrDig;
// // }



// rellenarArrayOriginal(cantidad,arrayOriginal)

// //arrayDigitos=rellenarArrayDig(arrayOriginal, arrayDigitos, digito);

// arrayDigitos=arrayOriginal.filter(num => num%10==digito )
// //Filtra cuando el elemento es num%10==digito

// arrayOriginal.forEach((number,i)=>{
//     console.log(`El numero ${i+1} es: ${number}`)
// })

// console.log(`Los numeros acabados en ${digito} son: ${arrayDigitos.join(", ")}`)