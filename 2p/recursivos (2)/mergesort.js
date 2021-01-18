let array = [6,5,3,9,11,12,8];

const mergeSort = (array) => {
    const half = array.length / 2
    
    if(array.length < 2) return array

    const left = array.splice(0, half) 

    return merge(mergeSort(left),mergeSort(array)) }

const  merge = (left, right) => {
    let arr = []
    
    while (left.length && right.length) {
       
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
 
    return [ ...arr, ...left, ...right ]
}
console.log(mergeSort(array));