let isRomanNumeralMode = false;
let selectedOperation;

const romanNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
};

document.getElementById("roman-toggle").addEventListener("change", (event) => {
  isRomanNumeralMode = event.target.checked;
  updateMode();
});

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
    let numbOne = parseInt(document.getElementById("firstNumberInput").value);
    let numbTwo = parseInt(document.getElementById("secondNumberInput").value);
    selectedOperation = document.querySelector('input[name="operation"]:checked').value;

    let result;

    switch(selectedOperation) {
        case "add":
            console.log("Adding", firstNumber, secondNumber);
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
    }
    console.log(result);

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
