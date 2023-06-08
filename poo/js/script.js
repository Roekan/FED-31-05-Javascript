const prompt = require("prompt-sync")();


//Reto1
/*Haz una clase llamada Persona que siga las siguientes condiciones:
● Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
(0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
constante para ello.
● Instancia al menos tres objetos.*/


// class Persona {

//     constructor(DNI){
//         this.nombre="",
//         this.edad=0,
//         this.DNI=DNI,
//         thi.sexo="H",
//         this.peso=0,
//         this.altura=0
//     }

// }

// let persona1 = newPersona("66666666x");
// let persona2 = newPersona("11111111A");
// let persona3 = newPersona("44444444T");


//RETO 2

/*Haz una clase llamada Password que siga las siguientes condiciones:
● Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.
● Los constructores serán los siguientes:
Incluye el método que genere una contraseña aleatoria con esa longitud.
 */


// class Password{
//     constructor(){
//         this.longitud=8;
//         this.clave='';
//     }

// claveRandom(){
// let num;

//     for(let i = 0; i<this.longitud;i++){
//         num=Math.round(Math.random()*9)
//         this.clave += num;
//     }
// }


// }


// let clave1 = new Password()
// clave1.claveRandom()
// console.log(clave1.clave)