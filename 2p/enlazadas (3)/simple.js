class Nodo
{
    constructor(entrada, siguiente)
    {
        this.entrada = entrada;    
        this.siguiente = siguiente; 
    }
}
class enlazada
{
    constructor()
    {
        this.ini = null; 
        this.count = 0; 
    }
    añadir(entrada)
    {
        let nodoDos = new Nodo(entrada,null);
        if(!this.ini) this.ini = nodoDos
        else
        {
            let actual = this.ini;
            while (actual.siguiente)
            {
             actual = actual.siguiente; 
            }                             
            actual.siguiente = nodoDos;
        }
        this.count++; 
    }
}
const lista = new enlazada();
console.log("Lista vacía ", lista);
lista.añadir("primero");
lista.añadir("Segundo");
lista.añadir("Tercero")
console.log("Listado ",lista)