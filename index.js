let input = document.getElementById("inputField");
let buttons = document.querySelectorAll("button");
let expression = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      expression = eval(expression);
      input.value = expression;
    } else if (e.target.innerHTML == "AC") {
      expression = "";
      input.value = expression;
    } else if (e.target.innerHTML == "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else {
      expression += e.target.innerHTML;
      input.value = expression;
    }
  });
});
