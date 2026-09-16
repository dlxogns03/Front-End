//구조 분해 할당
// 배열 생성 
// index      0    1    2 
const arr = ["a", "b", "c"];
//인덱스 별로 값을 가져오려면?
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
clear();
const [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);
