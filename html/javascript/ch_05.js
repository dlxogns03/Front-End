/**
 * DOM
 * > HTML 문서를 브라우저가 읽으면서 태그별로 객체화 시켜둔 것.
 * DOM Tree
 * > DOM간의 관계 (자식, 형제, 부모)
 * DOM 종류
 * > DOM, Shadow DOM (Virtual DOM)
 * > Shadow DOM (Virtual DOM) >> 스크립트에 의해 생성된 DOM
 * Shadow dom과 dom 은 메모리 아이디가 다르다
 *
 *
 * JavaScript 에서의 null -> 값이다 (데이터가 없다)
 */

onload = function () {
  const priceDom = document.querySelector(".package-ticket-price");
  console.log(priceDom);
  // 값 출력 -> null
  // null. 하면 아무것도 없는값에 이벤트를 할당할 수 없다.
  // javascript 에서도 null을 처리하는 방법은 두가지가있다
  /**
   * if
   *
   * nullable
   * a? => a가 null이거나 undefind면 ?뒤에것을 다 무시해라
   * a! => a는 무조건 null이나 undefind가 아니어야 한다.
   */

  //   priceDom?.onclick = function () {
  //     alert("Click!");
  //   };
  priceDom?.addEventListener("click", function () {
    alert("Click");
  }); //<= 똑같은 이벤트를 중복해서 이벤트를 줄 수 있다(안전 X)
  // 위의 두코드는 동작이 같은 코드다

  const buttons = document.querySelectorAll(".package-green-button");

  buttons.forEach(function (eachButton) {
    eachButton.onclick = function (event) {
      const newP = document.createElement("p");

      const package = this.closest(".package");
      console.log(package);

      const price = package.dataset.price;
      console.log(price);

      // newP.innerText = "From $" + price;
      newP.innerText = `From $${price}`;
      // template literal => 변수 수식 다 사용가능 ;
      // ${a +b } =>인터폴레이션
      newP.classList.add("package-ticket-price");

      newP.onclick = function () {
        alert("Click!");
      };

      package.querySelector(".package-button-area").append(newP);
      this.remove();
    };
  });
};
