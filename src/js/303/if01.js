const date = new Date()
const currentYear = date.getFullYear();
let birthYear;
let age;

let birthStr;
let birthNum;

function calcAge() {
    birthStr = prompt("태어난 년도");
    if (birthStr.length == 4) {
        if (birthStr) {
            birthYear = parseInt(birthStr);
            if (birthYear > 0 ) {
                if(!isNaN(birthYear)) {
                    age = currentYear - birthYear + 1;
                    if (age < 20) {
                        alert("성인이 아닙니다.");
                    }
                    alert(`${currentYear}년 현재, ${age}세 입니다.`);
                } else {
                    alert("숫자를 입력해주세요");
                }
            } else {
                alert("정수를 입력하세요");
            }
        } else {
            console.log(birthStr);
        }
    } else {
        alert("유효한 년도를 입력해주세요.");
    }
};