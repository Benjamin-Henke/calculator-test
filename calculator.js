let isRomanNumeralMode = false;
let selectedOperation = null;

const romanNumerals = [
  "I", "V", "X", "L", "C", "D", "M"
];
// I: 1 V: 5 X: 10 L: 50 C: 100 D: 500 M: 1000

document.getElementById("roman-toggle").addEventListener("change", (event) => {
  isRomanNumeralMode = event.target.checked;
  updateMode();
});

document.getElementById("firstNumberInput").addEventListener("input", validateInputs);
document.getElementById("secondNumberInput").addEventListener("input", validateInputs);

document.getElementById("firstNumberInput").addEventListener("input", function () {
    let text = document.getElementById("firstNumberInput").value;
    document.getElementById("firstNumber").innerHTML = text;
});

document.getElementById("secondNumberInput").addEventListener("input", function () {
    let text = document.getElementById("secondNumberInput").value;
    document.getElementById("secondNumber").innerHTML = text;
});

document.getElementById("add").addEventListener("change", handleOperation);
document.getElementById("subtract").addEventListener("change", handleOperation);
document.getElementById("multiply").addEventListener("change", handleOperation);
document.getElementById("divide").addEventListener("change", handleOperation);

function validateInputs(event) {
  if (isRomanNumeralMode) {
    const pattern = new RegExp(`[^${romanNumerals.join("")}]`, "g");
    event.target.value = event.target.value.toUpperCase().replace(pattern, "");
  } else {
    event.target.value = event.target.value.replace(/[^0-9.-]/g, '');
  }
};

function validateRomanNumeral(input) {
  const pattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  pattern.test(input.toUpperCase());
};

function convertRomanNumerals() {

};

function handleOperation() {
    selectedOperation = document.querySelector('input[name="operation"]:checked').value;
    switch(selectedOperation) {
        case "add":
            document.getElementById("operation").innerHTML = "+";
            break;
        case "subtract":
            document.getElementById("operation").innerHTML = "-";
            break;
        case "multiply":
            document.getElementById("operation").innerHTML = "*";
            break;
        case "divide":
            document.getElementById("operation").innerHTML = "/";
            break;
    }
};

function calculate() {
  let numbOneInput = document.getElementById("firstNumberInput").value;
  let numbTwoInput = document.getElementById("secondNumberInput").value;

  if (!numbOneInput || !numbTwoInput) {
    throw new Error("Please enter both numbers");
  }

  if (!selectedOperation) {
    throw new Error("Select an operation");
  };

  selectedOperation = document.querySelector('input[name="operation"]:checked').value;

  let numbOne;
  let numbTwo;

  if (isRomanNumeralMode) {
    if (!validateInputs(numbOne) || !validateInputs(numbTwo)) {
      throw new Error("Invalid Roman Numeral");
    }
  } else {
    numbOne = parseInt(numbOneInput);
    numbTwo = parseInt(numbTwoInput);
  }

  let result;
  switch(selectedOperation) {
      case "add":
          result = numbOne + numbTwo;
          break;
      case "subtract":
          result = numbOne - numbTwo;
          break;
      case "multiply":
          result = numbOne * numbTwo;
          break;
      case "divide":
          result = numbOne / numbTwo;
          break;
  };

  // if roman numeral mode, go back to roman numeral
  document.getElementById("result").innerHTML = result;
};

function clearFields() {
    document.getElementById("firstNumberInput").value = "";
    document.getElementById("secondNumberInput").value = "";
    document.getElementById("firstNumber").innerHTML = "";
    document.getElementById("secondNumber").innerHTML = "";
    document.getElementById("operation").innerHTML = "";
    document.getElementById("result").innerHTML = "";
};

function updateMode() {
  if (isRomanNumeralMode) {
    document.getElementById("mode").textContent = "Roman Numeral Mode"
  } else {
    document.getElementById("mode").textContent = "Standard Mode"
  }
};
