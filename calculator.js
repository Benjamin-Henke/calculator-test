let operation;

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
    operation = document.querySelector('input[name="operation"]:checked').value;
    console.log(operation)
    switch(operation) {
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
    let firstNumber = parseInt(document.getElementById("firstNumberInput").value);
    let secondNumber = parseInt(document.getElementById("secondNumberInput").value);
    operation = document.querySelector('input[name="operation"]:checked').value;

    let result;

    switch(operation) {
        case "add":
            console.log("Adding", firstNumber, secondNumber);
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
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
