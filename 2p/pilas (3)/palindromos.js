const palindromo = () =>{
    let cadena=prompt("texto aquí").toLowerCase();
    for (let i=0;i<cadena.length;i++){ 
         if(cadena[i]!=cadena[cadena.length-i-1]) return false;}
    return true; }
if(palindromo()) alert("Palíndromo");
else alert("No es palíndromo");