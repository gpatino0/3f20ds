class SacaFila{
    constructor(datodeUsuario)
    {
    this.datodeUsuario = datodeUsuario;
    }

    insertar()
    {
        this.datodeUsuario =  Number(prompt("Numero de fila de la matriz"));
        while (this.datodeUsuario <  1 || this.datodeUsuario > 3)
        {
            alert("Matriz de 3x3 ingresa un dato de ese rango");
            this.datodeUsuario = Number(prompt("Numero de fila de la matriz"))
        }
        return this.datodeUsuario;
    }

    impresiondeFila(matriz)
    {
        let ind = this.datodeUsuario - 1;
        console.log('Columna elegida ',this.datodeUsuario,':', matriz[ind]);
    }
}
let matriz = new Array([1,2,3], [4,5,6], [7,8,9]);
let column = new SacaFila();
column.insertar();
column.impresiondeFila(matriz)
