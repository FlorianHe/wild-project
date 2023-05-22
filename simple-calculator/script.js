let firstValue = parseInt(prompt("Value 1"));
let operator = prompt("Operator");
let secondValue = parseInt(prompt("Value 2"));

calculate(firstValue, operator, secondValue)

function calculate(firstValue, operator, secondValue) {
    switch (operator) {
        case '+':
            console.log(firstValue + secondValue);
            break;
        case '-':
            console.log(firstValue - secondValue);
            break;
        case '*':
            console.log(firstValue * secondValue);
            break;
        case '/':
            console.log(firstValue / secondValue);
            break;
        default:
            console.log("Opérateur non valide");
            break;
    }
}
