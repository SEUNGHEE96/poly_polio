// 변수를 선언
const date = new Date()
const hour = date.getHours()

console.log("년도 : " + date.getFullYear());
console.log("월 : " + (date.getMonth() + 1));
console.log("일 : " + date.getDate());
console.log("시 : " + date.getHours());
console.log("분 : " + date.getMinutes());
console.log("초 : " + date.getSeconds());

// if 조건문
if (hour < 12) {
    // 표현식 hour < 12가 참일 때 실행
    alert('오전입니다.');
}

if (hour >= 12) {
    // 표현식 hour >= 12가 참일 때 실행
    alert('오후입니다.')
}