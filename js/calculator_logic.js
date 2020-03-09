"use strict";
//Const Operationss
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b
};
//Variables
const variables = {
    number1: "",
    number2: "",
    operator: "",
    num1_sign: "",
    num2_sign: ""
};
let { number1, number2, operator, num1_sign, num2_sign } = variables;
//Add Number function.
const addNum = ({ value }) => {
    operator === "" ? (number1 += value) : (number2 += value);
    displayInfo();
};
/* if operator = + OR - can be a sign. Algorithm */
const addOperator = ({ value }) => {
    if (number1 == "" && (value == "+" || value == "-")) {
        num1_sign = value;
    }
    else {
        if (number1 == "" && (value == "*" || value == "/")) {
            //nothing
        }
        else {
            // number1 exist
            if (operator == "") {
                operator = value;
            }
            else {
                //operator exist
                if (number2 == "" && value != "*" && value != "/") {
                    num2_sign = value;
                }
            }
        }
    }
    displayInfo();
};
const resetC = () => {
    document.getElementById("my-screen").value = "";
    reset();
};
const reset = () => {
    console.log("ejecuto reset");
    number1 = "";
    number2 = "";
    operator = "";
    num1_sign = "";
    num2_sign = "";
};
function operate() {
    let solution = 0;
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    /* checkeo de signos.*/
    num1_sign === "-" ? (number1 *= -1) : "";
    num2_sign === "-" ? (number2 *= -1) : "";
    solution = operations[`${operator}`](number1, number2);
    document.getElementById("my-screen").value =
        solution === "Infinity"
            ? "Error"
            : solution;
    reset();
    solution === "Infinity" ? ("") : number1 = solution;
}
const displayInfo = () => {
    console.log(number1);
    console.log(number2);
    console.log(operator);
    console.log(num1_sign);
    console.log(num2_sign);
    document.getElementById("my-screen").value = `${num1_sign} ${number1} ${operator} ${num2_sign} ${number2}`;
};
