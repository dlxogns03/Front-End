onload = function () {
  const image = document.querySelector("img");
  image.onmouseenter = function () {
    const ticket = document.querySelector(".ticket");
    console.log(ticket);
    console.dir(ticket);

    css(ticket, {
      display: "block",
      ["font-size"]: "2rem",
      color: "#f00",
      ["background-color"]: "#fff",
    });
  };
  image.onmouseleave = function () {
    const ticket = document.querySelector(".ticket");
    // ticket.style.removeProperty("display");
    removeCSS(ticket, ["display", "font-size", "color", "background-color"]);
  };
};

// 전달받은 styles를 dom한테 전달
function css(dom, styles) {
  if (dom) {
    // 객체를 반복할때 for in 사용
    for (let key in styles) {
      dom.style.setProperty(key, styles[key]);
    }
  }
}

function removeCSS(dom, properties) {
  // if (dom != null && dom != undefined) 이코드와 아래코드는 같다
  // javascript의 if 는 boolean과 다른요소로 같이 판단한다
  if (dom) {
    properties.forEach(function (eachProp) {
      dom.style.removeProperty(eachProp);
    });
  }
}
