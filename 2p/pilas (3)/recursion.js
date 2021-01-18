function Recursion(){

    this.temp = [];
    this.top = 0;

    this.push = function (dato) {this.temp[this.top++] = dato;}
    this.pop = function () {return this.temp[--this.top]; }
    this.peek = function () {return this.temp[this.top - 1];}
    this.length = function () {return this.top;}
    this.clear = function () {this.top = 0;}
}
const fact = (n) => {
    const s = new Recursion();
    while (n > 1) s.push(n--);

    let product = 1;

    while (s.length() > 0) product *= s.pop();
    return product;
}
alert('factorial 3 = ' + fact(3));


