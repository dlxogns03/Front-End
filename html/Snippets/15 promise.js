// 비동기의 동기화
// Callback을 최소화 시키는 방법.
clear();
const process =  new Promise(function(resolve, reject){
    //resolve == > 비동기 함수가 성공했을때 동작할 코드
    // reject ==> 비동기 함수가 실패했을 때 동작할 코드
    // promise 함수내에는 비도기 함수를 동작시켜야 한다.
    setTimeout(function() {
        console.log("함수가 실행되었습니다.")
        // 비동기 함수가 반환시킬 값을 resolve의 파라미터로 전달한다.
        resolve("실패함!");
        // reject("실패함");
    } , 2000);
});
process
    //프로미스의 비동기 함수에서 resolve를 호출했을때 실행됨.
    .then(function(returnValue){
        return new Promise(function (resolve, reject) {
            setTimeout(function() {} , 2000)
            if(returnValue === "완료됨!"){
                resolve("다음작업 진행하세요");
            }else{
                reject("이전 작업이 올바르게 종료되지 않았습니다.");
            }
        })
        // console.log(returnValue);
        // //비동기코드 작성가능
        // return "다음 작업 진행하세요."; //return도 가능 (다음 .then 의 리턴 값이 전달된다)
    })
    .then(function(returnValue){
        console.log(returnValue);
    })
    .catch(function(errorMessage){
        console.log(errorMessage);
    })