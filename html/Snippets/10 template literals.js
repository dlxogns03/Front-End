

let a = 1;
let b = 2;
const message = `${a} + ${b} = ${a + b}`;
// ${a +b } =>인터폴레이션 
console.log(message);

function add (a,b){
    return a + b;
}

const result = `${a} + ${b}= ${add(a, b)}`
console.log(result)