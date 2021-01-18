let t1 = 1, t2 = 2, t3 = 3, n = 4;

const hanoi = (n, ori, des, a) => {
    if(n === 1)   console.log("cambiar disco " + n + " de torre " + ori + " a torre " + des);
    else {
        hanoi(n - 1, ori, a, des);
        console.log("cambiar disco " + n + " de torre " + ori + " a torre " + des);
        hanoi(n - 1, a, des, ori);
    }
}
hanoi(n, t1, t3, t2);