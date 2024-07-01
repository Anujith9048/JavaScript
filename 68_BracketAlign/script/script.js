function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    document.getElementById("result").innerText = "";
    document.getElementById("resultError").innerText = "";
    let isValid = true;
    for (let char of str) {
        if (map[char]) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                isValid = false;
                break;
            }
        } else if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
    }

    if (stack.length > 0) {
        isValid = false;
    }

    var brOpen = 0, curOpen = 0, sqOpen = 0;
    var brClose = 0, curClose = 0, sqClose = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            brOpen++;
        } else if (str[i] === '{') {
            curOpen++;
        } else if (str[i] === '[') {
            sqOpen++;
        } else if (str[i] === ')') {
            brClose++;
        } else if (str[i] === '}') {
            curClose++;
        } else if (str[i] === ']') {
            sqClose++;
        }
    }

    if (isValid) {
        document.getElementById("result").innerText = "Valid expression";
    } else {
        document.getElementById("result").innerText = "Invalid expression";
        document.getElementById("resultError").innerText = "Wrong alignment";

        if (brOpen > brClose) {
            document.getElementById("resultError").innerText = "Closing bracket missing ()";
        } else if (brOpen < brClose) {
            document.getElementById("resultError").innerText = "Unwanted closing bracket ()";
        } else if (curOpen > curClose) {
            document.getElementById("resultError").innerText = "Closing bracket missing {}";
        } else if (curOpen < curClose) {
            document.getElementById("resultError").innerText = "Unwanted closing bracket {}";
        } else if (sqOpen > sqClose) {
            document.getElementById("resultError").innerText = "Closing bracket missing []";
        } else if (sqOpen < sqClose) {
            document.getElementById("resultError").innerText = "Unwanted closing bracket []";
        }
    }
}
