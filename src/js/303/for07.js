let star = '*';
let output = ' ';
const size = 5;

let height = 0;

for (let i = 1; i <= 4; i++) {
    console.log(star.repeat(i) + output.repeat(size * 2 - i * 2 + 1) + star.repeat(i));
}
for (let i = 1; i <= 5; i++) {
    console.log(output.repeat(i - 1) + star.repeat(size - i + 1) + '?' + star.repeat(size - i + 1) + output.repeat(i - 1));
}


let stars = [];
// 문자열로 초기화
for( let i=0; i<=size; i++) {
    stars[i] = "";
}

//배열에 별표넣기
for(let i=0; i<=size * 2; i++) {
    for(let j=0; j<i; j++) {
        stars[i] += "*";
    }
    for(let j=size * 2; i<j; j-=2) {
        stars[i] += " ";
    }
}

//완성된 별표 출력하기
for(line of stars) {
    console.log(line);
}