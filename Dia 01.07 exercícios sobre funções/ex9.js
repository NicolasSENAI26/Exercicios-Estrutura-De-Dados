function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Operação inválida");
    }
}

calculadora(10, 5, "*");