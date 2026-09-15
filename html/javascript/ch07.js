// onload = function () {
//   // 아이디가 "package-ticket-count" 인 DOM에 대해
//   const input = document.querySelector("#package-ticket-count");

//   console.log(input);
//   // oninput 이벤트가 발생하면
//   input.oninput = function () {
//     // 콘솔에 "Input!"이 출력되도록 한다.
//     console.log("Input!");

//     // 동시에 input의 부모 중 package에 있는
//     // data-price 값을 가져와 출력한다.
//     const package = input.closest(".package");
//     const price = package.dataset.price;
//     console.log(price);

//     // const count = input.valueAsNumber;

//     // const result = price * count;
//     // doc.QS (id) 로 찾아서 하면 느리다 <= html문서가 클때
//     // const total = document.querySelector("#amount");
//     // domtravelsee

//     // 만약, input에 입력한 값이 비어있다면 ,0으로 초기화 해라.
//     // if (!this.value) {
//     //   this.value = "0";
//     // }

//     let inputValue = parseInt(this.value);
//     if (isNaN(inputValue)) {
//       inputValue = 0;
//     }

//     const amount = package.nextElementSibling.querySelector("#amount");

//     amount.innerText = inputValue * parseFloat(price);
//   };
// };
// // window 의 타입은 window
Window.prototype.afterRender = function (callbackFunction) {
  this.onload = callbackFunction;
};
//document의 타입은 document
Document.prototype.find = function (selector) {
  return this.querySelector(selector);
};

// DOM의 타입 ==> Element
Element.prototype.next = function () {
  return this.nextElementSibling;
};
Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};

window.afterRender(function () {
  const count = document.find("#package-ticket-count");

  count.oninput = function () {
    const package = this.closest(".package");
    const price = package.dataset.price;

    if (!this.value) {
      this.value = "0";
    }

    const amount = package.next().find("#amount");
    amount.innerText = parseInt(this.value) * parseFloat(price);
  };
});
