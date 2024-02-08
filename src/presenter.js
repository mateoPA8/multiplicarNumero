import sumar from "./sumador";
import multiplicar from "./multiplicador";

const form = document.querySelector("#sumar-form");
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const divSumar = document.querySelector("#resultadoSumar-div");

const first1 = document.querySelector("#primer1-numero");
const second2 = document.querySelector("#segundo2-numero");
const form2 = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultadoMultiplicar-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  divSumar.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
 
});
form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber1 = Number.parseInt(first1.value);
  const secondNumber2 = Number.parseInt(second2.value);

 
  divMultiplicar.innerHTML = "<p>" + multiplicar(firstNumber1, secondNumber2) + "</p>";
});
