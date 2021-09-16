const calculate = (op, operand1, operand2) => {
  
  console.log(operand1)
  if (isNaN(operand1)) {
    return operand2;
  }
  let res;
  switch (op) {
    case "+":
      res = operand1 + operand2;
      break;
    case "-":
      res = operand1 - operand2;
      console.log(res)
      break;
    case "/":
      res = operand1 / operand2;
      break;
    case "x":
      res = operand1 * operand2;
      break;
    default:
      break;
  }
  return res;
};

export default calculate;