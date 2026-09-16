clear();

let negativeNum = 0;
let negativeString = "";
let negativeArray=[];
let negativeObject = {};
let negativeBoolean = false;
let negativeUndefined = undefined;
let negativeNull = null;


// JS에서 if에 0이 들어가면 false로 취급한다.
// JS에서 데이터가 없으면 false로 판단
if(!negativeNum){
    console.log("숫자가 0보다 입니다.")
}

if(!negativeString){
    console.log("문자열이 비어있습니다.")
}

// 배열은 배열의 안에 아이템이 없더라도 ture로 판단
// 배열과 객체는 JS에서 밖에서 마음대로 추가할 수 있기 때문에 
// 어딘가에 메모리가 존재한다 그러므로 if 문에서 ture로 판단한다.
if(negativeArray){
    console.log("배열의 아이템이 존재합니다.")
}

if(negativeObject){
    console.log("객체가 존재합니다.")
}