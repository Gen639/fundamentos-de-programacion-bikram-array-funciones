let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
   [0, 1, 2],
   ["a", "b", "c"],
];
function suma(a, b) {
   return a + b;
}
function potenciacion(a, b) {
   return Math.pow(a, b);
}
function separarPalabras(text) {
   let newArray = text.split(" ");
   return newArray;
}

function repetirString(text, num) {
   return text.repeat(num);
}

function esPrimo(num) {
   if (num === 1) {
      return false;
   } else if (num === 2) {
      return true;
   } else {
      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            return false;
         }
      }
      return true;
   }
}
function ordenarArray(array) {
   let newArray = array.sort(function (a, b) {
      return a - b;
   });
   return newArray;
}

function obtenerPares(array) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         newArray.push(array[i]);
      }
   }
   return newArray;
}
// 12. give erroy but should be good
function pintarArray(array) {
   return `[${array.join(', ')}]`;
}

function arrayMapi(array, func) {
   return array.map(func);
}

function eliminarDuplicados(array) {
   return [...new Set(array)];
}

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [
   [756, "nombre"],
   [225, "apellido"],
   [298, "direccion"],
];

function multiplicacion(a, b) {
   return a * b;
}
function division(a, b) {
   return a / b;
}

function esPar(num) {
   if (num % 2 === 0) {
      return true;
   }
   return false;
}

let arrayFunciones = [
   function suma(a, b) {
      return a + b;
   },
   function resta(a, b) {
      return a - b;
   },
   function multiplicacion(a, b) {
      return a * b;
   },
];

function ordenarArray2(array) {
   let newArray = array.sort(function (a, b) {
      return b - a;
   });
   return newArray;
}

function obtenerImpares(array) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
         newArray.push(array[i]);
      }
   }
   return newArray;
}

function sumarArray(array) {
   let sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
   }, 0);
   return sum;
}

function multiplicarArray(array) {
   let sum = array.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
   }, 1);
   return sum;
}
