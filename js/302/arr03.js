let fruits = ['배', '사과', '키위', '바나나']
console.log(fruits);

let result = fruits.splice(2,1);
console.log(result);
console.log(fruits);

fruits.push(result[0]);
console.log(fruits);
