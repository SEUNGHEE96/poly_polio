const rawinput = prompt('inch 단위의 숫자를 입력해주세요.')

const inch = Number(rawinput);
const cm = inch * 2.54;

alert(`${inch}inch는 ${cm}cm 입니다`)