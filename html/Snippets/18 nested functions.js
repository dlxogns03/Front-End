
function a(){
    console.log("a")
    //private function
    function b(){
        console.log("b")
    }

    // immediatly execute function (즉시 실행함수)
    // 함수를 생성함과 동시에 실행시키는 함수 생성 방법.
    // 콜백 함수에 async를 쓸수 없는 환경일때 
    // 즉시 실행함수를 만든다.
    (async function (num) {
        console.log("즉시 실행 함수", num);
    })(100);// <== 즉시 실행 함수에 파라미터를 주고 싶으면 맨뒤 ()안에 작성
}


//둘다 window라는 객체에 들어있어서
//공개 되어 있는것들이라면 
//아무 문제 없이 호출가능 
//b function을 숨기고 싶으면 다른 function 안쪽에 작성하면
//외부에서 b function을 호출할 수 없다 .

a();
// b();
