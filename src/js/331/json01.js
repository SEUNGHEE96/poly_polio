let student = {
    name: "박태현",
    major: "데이터학과",
    grade: 2
};

console.log(typeof(student));
console.log(student);

let jsonstr = JSON.stringify(student);
console.log(typeof(jsonstr));
console.log(jsonstr);

let obj = JSON.parse(jsonstr);
console.log(typeof(obj));
console.log(obj);
