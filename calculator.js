let isRomanNumeralMode = false;
let selectedOperation = null;

const romanNumerals = [
  "I", "V", "X", "L", "C", "D", "M"
];

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

document.getElementById("add").addEventListener("click", handleOperation);
document.getElementById("subtract").addEventListener("click", handleOperation);
document.getElementById("multiply").addEventListener("click", handleOperation);
document.getElementById("divide").addEventListener("click", handleOperation);

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
  return pattern.test(input.toUpperCase());
};

function convertRomanToInt(roman) {
  const romanMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  let result = 0;
  let baseValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanMap[roman[i]]
    if (!currentValue) throw new Error(`Invalid Roman Numeral: ${roman[i]}`);

    if (currentValue < baseValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    baseValue = currentValue
  }

  return result;
};

function convertIntToRoman(number) {
  if (number <= 0 || number > 3999) throw new Error("Numbers must be between 1 - 3999");

  const values = [1000, 9000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanSymb = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      result += romanSymb[i];
      number -= values[i];
    }
  };

  return result;
};

function handleOperation(event) {
  selectedOperation = event.target.value;
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

  console.log(`number one input: ${numbOneInput} | number two input: ${numbTwoInput}`);

  if (!numbOneInput || !numbTwoInput) {
    throw new Error("Please enter both numbers");
  }

  if (!selectedOperation) {
    throw new Error("Select an operation");
  };


  let numbOne;
  let numbTwo;

  if (isRomanNumeralMode) {
    if (!validateRomanNumeral(numbOneInput) || !validateRomanNumeral(numbTwoInput)) {
      throw new Error("Invalid Roman Numeral");
    };

    numbOne = convertRomanToInt(numbOneInput);
    numbTwo = convertRomanToInt(numbTwoInput);
    console.log(`number one: ${numbOne} | number two: ${numbTwo}`)

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

  if (isRomanNumeralMode) {
    if (result <= 0 || result > 3999 || !Number.isInteger(result)) {
        throw new Error('Result must be a positive integer between 1 and 3999 for Roman numerals');
    }
    document.getElementById("result").textContent = convertIntToRoman(Math.round(result));
  } else {
    document.getElementById("result").textContent = Number.isInteger(result) ? result : result.toFixed(2);
  }
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
  const modeText = document.getElementById("mode");
  const helpText = document.getElementById("helpText");

  if (isRomanNumeralMode) {
    modeText.textContent = "Roman Numeral Mode: ";
    helpText.textContent = "Roman Numerals (I, V, X, L, C, D, M)";
  } else {
    modeText.textContent = "Standard Mode: ";
    helpText.textContent = "Numbers (1-3999)";
  }
};
