const print = (element) => { return console.log(element);}

class GrafoOrder {
    constructor(v){
        this.vertices = v;
        this.edges = 0;
        this.adj = [];

        for(let i = 0; i < this.vertices; i++){ this.adj[i] = []; }}
        
        ae(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    
    sg(){
        for(let i = 0; i < this.vertices; ++i){
            let string = ""; 
            string += ("" + i + " = ");
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined){
                    string += (this.adj[i][j] + " "); }}
            print(string);}}
    o(){return print("Ordenados: " + this.edges);}
}
const e = () => {
    g = new GrafoOrder(7);
    g.ae(0,1);
    g.ae(0,2);
    g.ae(1,3);
    g.ae(2,4);
    g.ae(3,5);
    g.ae(3,6);
    g.sg();
    g.o();
}
e();