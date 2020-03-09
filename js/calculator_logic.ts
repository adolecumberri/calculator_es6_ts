//Const Operationss
const operations: {
  [key: string]: (a: number, b: number) => number;
} = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "/": (a: number, b: number): number => a / b,
  "*": (a: number, b: number): number => a * b
};

//Variables
const variables: {
  number1: string | number;
  number2: string | number;
  operator: string | keyof typeof operations;
  num1_sign: string;
  num2_sign: string;
} = {
  number1: "",
  number2: "",
  operator: "",
  num1_sign: "",
  num2_sign: ""
};

let { number1, number2, operator, num1_sign, num2_sign } = variables;

//Add Number function.
const addNum = ({ value }: HTMLInputElement) => {
  operator === "" ? (number1 += value) : (number2 += value);
  displayInfo();
};

/* if operator = + OR - can be a sign. Algorithm */
const addOperator = ({ value }: HTMLInputElement) => {
  if (number1 == "" && (value == "+" || value == "-")) {
    num1_sign = value;
  } else {
    if (number1 == "" && (value == "*" || value == "/")) {
      //nothing
    } else {
      // number1 exist
      if (operator == "") {
        operator = value;
      } else {
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
  (document.getElementById("my-screen") as HTMLInputElement).value = "";
  reset();
};

const reset = () => {
  number1 = "";
  number2 = "";
  operator = "";
  num1_sign = "";
  num2_sign = "";
};

function operate() {
  let solution: number | string = 0;
  number1 = parseFloat(number1 as string);
  number2 = parseFloat(number2 as string);
  /* checkeo de signos.*/
  num1_sign === "-" ? (number1 *= -1) : "";
  num2_sign === "-" ? (number2 *= -1) : "";

  solution = operations[`${operator}`](number1, number2);
  (document.getElementById("my-screen") as HTMLInputElement).value =
    ((solution as unknown) as string) === "Infinity"
      ? "Error"
      : ((solution as unknown) as string);
  reset();
  ((solution as unknown) as string) === "Infinity" ? ("") : number1 = solution;
}

const displayInfo = () => {
  (document.getElementById(
    "my-screen"
  ) as HTMLInputElement).value = `${num1_sign} ${number1} ${operator} ${num2_sign} ${number2}`;
};
