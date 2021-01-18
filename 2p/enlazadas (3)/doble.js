class Node {
    constructor(dato, siguiente, prev) {
        this.dato = dato;
        this.siguiente = siguiente;
        this.prev = prev;
    }};

class dobles {
     constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0; };

     adt(dato)
    {const otroNodo= new Node(dato, this.head, null); 
if (this.head)                 
        { otroNodo.siguiente = this.head;  
            this.head.prev = otroNodo;  
            this.head = otroNodo;      }
        else {
            this.head = otroNodo;   
            this.tail = otroNodo;};
        this.size++; }; adt(dato){
        const nuevoNodo = new Node(dato, null, this.tail); 
        if (this.tail)   {
            nuevoNodo.prev = this.tail;   
            this.tail.siguiente = nuevoNodo;   
            this.tail = nuevoNodo;         
        } else{
            this.tail = nuevoNodo;    
            this.head = nuevoNodo;};
        this.size++; };

    ia(dato, index) { 
        if (index < 0 || index > this.size) return null ;
        const newNode = new Node(dato, null, null);   
        let current = this.head;      
        let previous;
        if (index === 0)
        {newNode.siguiente = current;        
            current.prev = newNode;    
            this.head = newNode;         
        }
        else {
            for (let i = 0; i < index; i++)    
            {
                previous = current;             
                current = current.siguiente;       
            };
            newNode.siguiente =current; 
            newNode.prev = previous;
            current.prev = newNode;
            previous.siguiente = newNode; 
        };                                  
        this.size++;};
    
    p() {

        let current = this.head;       
        let result = '';               
        while(current) {
            result += current.dato + ' -> ';  
            current = current.siguiente;};
        return result += 'Nada';};
    
        rp() {
        let current = this.tail;        
        let result = '';
        while(current) {
            result += current.dato + ' -> ';
            current = current.prev;     
        };
        return result += 'Nada';};}

const listaDoble = new dobles();
listaDoble.adt(1);
listaDoble.adt(2);
listaDoble.adt(3);
listaDoble.adt(4);
listaDoble.ia(2, 0);
console.log("inicio a fin ",listaDoble.p())
console.log("fin a inicio ",listaDoble.rp())
console.log(listaDoble)

