let buttons = document.querySelectorAll("button");
for (button of buttons) {
  button.style.backgroundColor = "#805DFF";
}
let elem = document.querySelector(".main-title");
let text =
  "Buy, Sell or Exchange your Cryptocurrency with most secure platform";
  let delay = 85; // cкорость

let printText = function (text, elem, delay) {
  if (text.length > 0) {
    elem.innerHTML += text[0];
    setTimeout(function () {
      printText(text.slice(1), elem, delay);
    }, delay);
  }
};
printText(text, elem, delay);