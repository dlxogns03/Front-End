function sumAll(){

    let sum =0 ;
    for (let i =  0 ; i< 100000; i++){
        sum+=i;
    }
    console.log(sum);
    
}


async function fetchData(){
    //비동기와 동기가 같이 있으면 함께시작이된다 
    // async는 fuction 앞에 붙인다 (비동기 코드가 포함되어 있는 
                                    // 함수 앞에)
    // async와 await는 성공을 햇을때만 처리한다.
    // 그래서 java과 같이 try catch를 쓴다
    try {
        const response =await fetch("https://jsonplaceholder.typicode.co.kr/posts");
        const body = await response.json();
        console.log(body);
    } catch(e){
        console.log(e.message);
    }
    sumAll();
}

clear();

// sumAll();
fetchData();