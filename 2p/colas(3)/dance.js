function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) { this.dataStore.push(element); }
function dequeue() { return this.dataStore.shift();}
function front() { return this.dataStore[0]; }
const back = () => { return this.dataStore[this.dataStore.length - 1];}
const toString = () => {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i)  retStr += this.dataStore[i] + "\n";
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0)  return true;
    else  return false;
}
function Dancer(nombre, s) {
    this.nombre = nombre;
    this.s = s;
}
const dance = (hombre, mujeres) => {
    print("The dance partners are: \n");
    while (!mujeres.empty() && !hombre.empty()) {
        person = mujeres.dequeue();
        print("Female dancer is: " + person.nombre);
        person = hombre.dequeue();
        print("Male dancer is: " + person.nombre + "\n");
    }
}
const print = (element) => { return console.log(element); }

const e = () =>{
    let dMasculino = new Queue();
    dMasculino.enqueue(new Dancer("NombreMasculino", "H"));
    dMasculino.enqueue(new Dancer("NimbreMasculino2", "H"));

    let dMujeres = new Queue();
    dMujeres.enqueue(new Dancer("NombreFememnino", "M"));

    dance(dMasculino, dMujeres);
    if (!dMujeres.empty()) print(dMujeres.front().nombre + " en espera para baile");
      
    if (!dMasculino.empty()) print(dMasculino.front().nombre + " en espera para baile.");
}
e(); 