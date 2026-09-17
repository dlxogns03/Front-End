import { getDom, onClick, getValue, setText } from "./calculator.js";

const firstNum = getDom(".input-number");
const secondNum = getDom(".input-number-2");

const addButton = getDom(".sum");
const resultDom = getDom(".result");

onClick(addButton, function () {
  console.log(firstNum);
  const result = getValue(firstNum) + getValue(secondNum);
  setText(resultDom, result);
});

const subbutton = getDom(".sub");

onClick(subbutton, function () {
  const result = getValue(firstNum) - getValue(secondNum);
  setText(resultDom, result);
});

const mulbutton = getDom(".mul");

onClick(mulbutton, function () {
  const result = getValue(firstNum) * getValue(secondNum);
  setText(resultDom, result);
});

const divbutton = getDom(".div");

onClick(divbutton, function () {
  const result = getValue(firstNum) / getValue(secondNum);
  setText(resultDom, result);
});
