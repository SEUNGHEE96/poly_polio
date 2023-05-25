function addNum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log( addNum(1,2));
console.log( addNum(1,3,5,7,9));
