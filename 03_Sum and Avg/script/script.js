function findSumAvg() { 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        var sum = num1 + num2 + num3;
        document.getElementById("result-sum").innerText = "The Sum is : " + sum;

        var avg = sum / 3;
        document.getElementById("result-avg").innerText = "The Avg is : " + avg;
    } else {
        document.getElementById("result-sum").innerText = "Error";
        document.getElementById("result-avg").innerText = "Not a number";
    }
}
