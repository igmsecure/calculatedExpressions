function calculatedExpressions(digits, target) {
    const operators = ["", "+", "-"]; // операторы
    const results = []; // Массив для хранения подходящих выражений

    // Рекурсивная функция для генерации выражений
    function backtrack(index, currentExpr) {
        // Если достигли конца строки, вычисляем выражение
        if (index === digits.length) {
            if (eval(currentExpr) === target) { 
                results.push(currentExpr);
            }
            return;
        }

        // Пробуем добавить каждый оператор
        for (const op of operators) {
            backtrack(index + 1, currentExpr + op + digits[index]);
        }
    }

    // Начинаем со второго символа, первый уже добавлен
    backtrack(1, digits[0]);
    return results;
}

const digitsString = "9876543210";
const targetValue = 200;
const expressions = calculatedExpressions(digitsString, targetValue);

// Выводим найденные выражения
console.log("Выражения c результатом " + targetValue + ":");
if (expressions.length > 0) {
    expressions.forEach(expr => console.log(expr));
} else {
    console.log("Выражения не найдены.");
}
