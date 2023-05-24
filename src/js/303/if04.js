let userNumber = prompt("숫자를 입력하세요");

if (userNumber) {
    userNumber = parseInt(userNumber);
    (userNumber % 22) ? alert(`${userNumber} : 홀수`) : alert(`${userNumber} : 짝수`);
}

/*
if (userNumber) {
    userNumber = parseInt(userNumber);
    if (!isNaN(userNumber)) {
        (userNumber % 2) ? alert(`${userNumber} : 홀수`) : alert(`${userNumber} : 짝수`);
    } else {
        alert("숫자를 입력하세요.");
    }
} else {
    alert("내용을 입력하세요.");
}
*/