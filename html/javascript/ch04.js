onload = function () {
  const button = document.querySelector(".package-green-button");

  button.onclick = function (event) {
    const newParagph = document.createElement("p");

    newParagph.innerText = "$399.99";

    newParagph.classList.add("package-ticket-price");

    this.after(newParagph);

    this.remove();
  };
};

/**
 * DOM
 * > HTML 문서를 브라우저가 읽으면서 태그별로 객체화 시켜둔 것.
 * DOM Tree
 * > DOM간의 관계 (자식, 형제, 부모)
 * DOM 종류
 * > DOM, Shadow DOM (Virtual DOM)
 * > Shadow DOM (Virtual DOM) >> 스크립트에 의해 생성된 DOM
 * Shadow dom과 dom 은 메모리 아이디가 다르다
 */
