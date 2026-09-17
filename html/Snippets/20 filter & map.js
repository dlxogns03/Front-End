clear();
const array = [1,2,3,4,5,6,7,8,9,10];

//배열의 모든 값들을 출력한다.
array.forEach(function (eachnumber){
    console.log(eachnumber);
});

//배열의 모든 값에 2를 곱한다. ==> 배열의 데이터를 변경한다.(map)
console.log("====map====");

const newArray = array.map(function(eachnumber){
    return eachnumber * 2;
});

newArray.forEach((num) => console.log(num));

//배열의 값 중 3의 배수만 가져온다.(filter)
console.log("===filter===")
const newArray2 = array.filter(function(eachnumber) {
    return eachnumber % 3 == 0;
})
newArray2.forEach((num) => console.log(num));
//화살표 함수를 이용한 코드.
//화살표 함수 ==> this.가 없다
// Java Lambda와 동일. JAVA : -> , JS : =>
console.log("===화살표 함수===")
array.forEach((eachnumber) => console.log(eachnumber));
console.log("===화살표 함수 map===")
const arrowNewArray = array.map((eachnumber) => eachnumber * 2);
arrowNewArray.forEach((eachnumber) => console.log(eachnumber))

console.log("===화살표 함수 filter===")
const arrayFilter = array.filter((eachnumber) => eachnumber % 3 == 0)
arrayFilter.forEach((num) => console.log(num))

// array에서 모든 값에 2를 곱한 결과 중 3의 배수만 가져와 출력한다.
// 화살표 함수로만 작성.
console.log("===화살표 함수 한번에===")
array.map((eachNumber) => eachNumber * 2)
     .filter((eachNumber) => eachNumber % 3 == 0)
     .forEach((eachNumber) => console.log(eachNumber))


const values = ["1","2","3"]; // ==> p태그로 변경
const pList = Array.from(values,(str) => {
    const p = document.createElement("p");
    p.textContent = str;
    return p;
})

pList.forEach( (p) => {
    document.querySelector("body").append(p);
})
