class SacaColumna {
    constructor(datodeUsuario)
    {
        this.datodeUsuario = datodeUsuario;
    }
    eligirColuma()
   {
       this.datodeUsuario =  Number(prompt("Numero de colunma"));
       while (this.datodeUsuario <  1 || this.datodeUsuario > 3)
       {
           alert("La matriz es de 3x3, ingresa de nuevo un dato");
           this.datodeUsuario = Number(prompt("Numero de colunma"))
       }
       return this.datodeUsuario;
   }
   sacarColumna(matriz)
   {
       let ind = this.datodeUsuario -1;
       console.log('usted ha seleccionado la columna ',this.datodeUsuario,':')
       let columna = matriz.map(function(matriz)
       {
           console.log(matriz[ind]);
       });
   }
}
let matriz = [[1,2,3], [4,5,6], [7,8,9]];
let miMatriz = new SacaColumna();
miMatriz.eligirColuma();
miMatriz.sacarColumna(matriz);


















