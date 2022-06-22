function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function modulus(x, y) {
  return x % y;
}

function calculate() {
  var x = parseInt(prompt("Enter first number"));
  var y = parseInt(prompt("Enter second number"));
  var operator = prompt("Enter operator from the list below: +, -, *, /, %");
  var result;
  switch (operator) {
    case "+":
      result = add(x, y);
      break;
    case "-":
      result = subtract(x, y);
      break;
    case "*":
      result = multiply(x, y);
      break;
    case "/":
      result = divide(x, y);
      break;
    case "%":
      result = modulus(x, y);
      break;
    default:
      alert("Invalid operator");
      break;
  }
  alert(result);
}
calculate();
