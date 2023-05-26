const test = {
    foo: function () {
        console.log("foo 메소드의 this");
        //test 함수의 this가 나옴
        console.log(this);
    },
    
    bar: () => {
        console.log("bar 메소드의 this");
        //익명 함수는 본인 함수의 this만 나오고 test를 가리키지 않는다
        console.log(this);
    }
}

test.foo();
test.bar();