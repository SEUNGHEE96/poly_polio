const student = {};

const poly = [
    ['박태현', '개발자', '술'],
    ['박준하', '연봉자', '당구'],
    ['정수영', '개발자', '달리기', 92]
];

let colums = ["name", "dream", "hobby", "score", "aaa"];

for (let item of poly) {
    let col = {};
    for (let i = 0; i < colums.length; i++) {
        if(item[i]){
            col[colums[i]] = item[i];
        }
    }
    let key = item[0];
    student[key] = col;
    
};
console.log(student);