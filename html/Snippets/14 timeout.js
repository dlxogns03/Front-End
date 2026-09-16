
//비동기 프로그래밍
function process1() {
    //대표적인 비동기 함수
    //setTimeout(실행할 함수, 함수의 실행을 지연시킬 시간(ms))
    setTimeout(function() {
        console.log("process1");
    }, parseInt( Math.random() * 10000));
}
function process2() {
    setTimeout(function() {
        console.log("process2");
    }, parseInt( Math.random() * 10000));}
function process3() {
    setTimeout(function() {
        console.log("process3");
    }, parseInt( Math.random() * 10000));}
function process4(cbFunction) {
    setTimeout(function() {
        console.log("process4");
        setTimeout(function() {
            console.log("process4종료됨");
            cbFunction();
        }, parseInt(Math.random() * 10000));
    }, parseInt( Math.random() * 10000));


}

function run() {
    //함수 내에서 함수를 만들수 있다
    //비동기만으로 함수를 만든다면 콜백이 동기프로그래밍이 나올때까지 무한이 중첩된다.
    //콜백을 깔끔하게 관리할 수 있도록 나온것이 프로미스
    // 비동기 -> 상태를 반드시 수반한다 (1. 실행대기중, 2. 실행중, 3.실행완료[1.실행 성공, 2. 실행 실패] )
    // 프로미스는 3번의 실행 성공이나 실패를 보고 약속을 하는것 
    // 프로미스는 비동기코드를 동기로 만들어준다
    // {                    {}
    //   {          ==>     {}
    //     {                {}
    // 실행 성공은 .then 실행 실패는 .cahtch
    function afterFunction2(){
        console.log("작업이 완료되어 고객에게 전화를 합니다.")
    }
    function afterFunction(){
        setTimeout(function(){
            console.log("작업이 종료되었습니다.");
            afterFunction2();
        }, parseInt( Math.random() * 10000))
    }
    
    console.log("run 시작됨")
    process1();
    process2();
    process3();
    process4(afterFunction);
    console.log("run 종료됨")
}

clear();
run();