// VARIABLES

let edad = 23;
const name = 'Raúl López';

// TIPOS DE DATOS DE LAS VARIABLES
// NUMERICO (entero y flotante/double)

let edadActual = 28;
let edadActual2 = 28.5;

// TEXTO / STRING
let segundoNombre = 'Alonso';

// BOOLEAN (True or False)
console.log(segundoNombre=='Pedro')
// En este ejemplo la consola nos arroja false.

// OPERADORES
// OPERADORES ARITMETICOS
let number1 = 75;
let number2 = 25;
console.log(number1+number2) //100
console.log(number1-number2) //50
console.log(number1*number2) //1875
console.log(number1/number2) //3
console.log(number1%number2) //0

// OPERADORES DE COMPARACION

console.log(number1>number2) // true
console.log(number1<number2) //false
console.log(number1<=number2) //false
console.log(number1>=number2) //true

// OPERADORES LOGICOS
const age = 28;
const genero = 'M';
const mayorEdad = 18;

const fiestaEntra = age >= mayorEdad && genero == 'M';
console.log(fiestaEntra) // true