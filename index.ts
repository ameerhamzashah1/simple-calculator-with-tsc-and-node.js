#! /usr/bin/env node
//shebang
import inquirer from "inquirer";

const answers = await inquirer.prompt([{
    message : "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
      // operator will be selected to get answer:
      message: "select one of the operator  to perform operation",
      type: "list",
      name: "operator",
      choices: ["addition", "subtraction", "multiplication", "division"],
    
}]);

//conditional statement
if (answers.operator == "addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator == "subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator == "multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator == "division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("please select valid operator");
}
