onload = function () {
  // 아이디가 email인 input에 oninput이벤트가 발생하면
  // 해당 엘리먼트의 부모인 .page-123을 찾고
  // 부모의 자식중 클래스가 eamil-value인 엘리먼트에
  // email의 value를 작성한다.
  const input = document.querySelector("#email");

  input.oninput = function () {
    const package = this.closest(".page-123");
    const emailtem = package.querySelector(".email-value");
    const inputValue = this.value;
    emailtem.innerText = inputValue;
  };

  // 아이디가 jobs인 select에 onchange 이벤트가 발생하면
  // 해당 엘리먼트의 부모인  .page-124를 찾고
  // 부모의 자식 중 클래스가 job-value인 엘리먼트에
  // jobs의 value를 작성한다.

  const select = document.querySelector("#jobs");
  select.onchange = function () {
    const package = this.closest(".page-124");
    const jobsSelect = package.querySelector("#jobs");
    const job = package.querySelector(".job-value");
    job.innerText = jobsSelect.value;
  };

  // input태그 중 type이 radio 이면서 name이 age인 엘리먼트에
  // input[type = radio][name = age]
  // onchange 이벤트가 발생하면 해당 엘리먼트의 부모인 .page-125를 찾고
  // 부모의 자식 중 클래스가 name-value인 엘리먼트에
  // input의 value를 작성한다.

  const radios = document.querySelectorAll("input[type = radio][name = age]");
  console.dir(radios);
  radios.forEach(function (eachradio) {
    eachradio.onchange = function () {
      this.closest(".page-125").querySelector(".name-value").textContent =
        this.value;
    };
  });

  const checkedAll = document.querySelector("#checked-all");
  checkedAll.onchange = ({ target }) => {
    const checked = target.checked;

    const checkItem = document.querySelectorAll(
      "input[type=checkbox][name=favorate-genre]",
    );
    checkItem.forEach((item) => {
      item.checked = checked;
      item.onchange({ target: item });
    });
  };

  const gnereList = document.querySelectorAll(
    "input[type=checkbox][name=favorate-genre]",
  );
  gnereList.forEach((checkBox) => {
    checkBox.onchange = ({ target }) => {
      const checkedItems = Array.from(gnereList).filter((gnr) => gnr.checked);

      let value = checkedItems.map((gnr) => gnr.value).join(", ");

      target.closest(".page-125").querySelector(".genre-name").textContent =
        value;

      checkedAll.checked = gnereList.length === checkedItems.checked;
    };
  });

  // onchange 선택한 값이 바뀌었나
};
