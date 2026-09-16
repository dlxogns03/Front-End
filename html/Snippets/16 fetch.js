clear();

const fetchResult = fetch("https://jsonplaceholder.typicode.com/posts");

fetchResult
    //promise(fetch)가 성공했을 때 실행되는 함수
    .then( function(fetchResponse){
        // console.log(fetchResponse);
        // fetch의 http response body를 구해온다.
        // json을 가져올 때도 promise로 가져온다
        // 데이터를 조립을 할때 언제 시작을 할지 
        // 언제 끝날지 모르기 때문에 promise 필요
        const fetchBody = fetchResponse.json();
        console.log(fetchBody);

        return fetchBody;
    })
    .then(function (body){
        console.log(body);
    })
    //promise(fetch)가 실패했을 때 실행되는 함수 
    .catch( function(fetchError) {
        console.log(fetchError);
    } )