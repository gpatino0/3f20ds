console.time('tiempo');
let objeto = {}; //Creamos objeto
let miMap = new Map(); //Creamos Map

//Creamos los Key Objects
let keyObj1 = {};
let keyObj2 = { b: 2 };

//Añadimos key objects al objeto
objeto[keyObj1] = 'a';
objeto[keyObj2] = 'b';

//Añadimos key objects al Map
miMap.set(keyObj1, 'a');
miMap.set(keyObj2, 'b');

console.log(objeto); //Solo guardó el último: { '[object Object]': 'b' }
console.log(miMap); //Guarda los dos: Map(2) { {} => 'a', { 'b': 2 } => 'b' }

//Un Key Object solo puede tener un único valor, es decir, si tratas de añadir otro valor a un mismo KeyObject, este solo guardará el último cambio
miMap.set(keyObj1, 'c');
console.log(miMap); //Map(2) { {} => 'c', { 'b': 2 } => 'b' }

//Podemos eliminar elementos del Map con el metodo .delete()
miMap.delete(keyObj1);
console.log(miMap); //Map(1) { { 'b': 2 } => 'b' }

let keyObj3 = { c: 3 };
let keyObj4 = { d: 4 };
miMap.set(keyObj3, 'c');
miMap.set(keyObj4, 'd');

//Se puede iterar a través de los Maps

for (let key of miMap.keys()) {
  //Iteración a través de los Key Objects
  console.log(key);
}

for (let value of miMap.values()) {
  //Iteración a través de los Valores
  console.log(value);
}

//Los WeakMaps a diferencia de los Maps no se pueden iterar
let wMap = new WeakMap(); //Creamos WeakMap

//Se añaden elementos
wMap.set(keyObj1, 'a');
wMap.set(keyObj2, 'b');
wMap.set(keyObj3, 'c');

//La forma de obtener los valores de un WeakMap es con el método .get()
console.log(wMap.get(keyObj2)); // b
console.timeEnd('tiempo');
