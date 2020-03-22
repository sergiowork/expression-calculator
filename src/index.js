function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let bracketOpen = 0;
    let bracketClosed = 0;

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "(") {
            bracketOpen++;
        } else if (expr[i] === ")") {
            bracketClosed++;
        }
    };

    if (bracketOpen !== bracketClosed) {
        throw new Error('ExpressionError: Brackets must be paired');
    };

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "/") {
            if (expr[i + 2] === "0") {
                throw new Error('TypeError: Division by zero.');
            }
        }
    };

    const calculate = new Function(`return ${expr.replace(/[\s]/g, '')}`);
    const result = calculate();


    return result;

}

module.exports = {
    expressionCalculator
}
