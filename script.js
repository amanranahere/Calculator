// -----------------> VARIABLES  & CONSTANTS

const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
let string = "";

// -----------------> LOGIC

Array.from(btn).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        display.value = string;
      } catch {
        display.value = "error";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "x²") {
      string = string ** 2;
      display.value = string;
    } else if (e.target.innerHTML == "√") {
      string = Math.sqrt(string);
      display.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string = string + e.target.innerHTML;
      display.value = string;
    }
  });
});
