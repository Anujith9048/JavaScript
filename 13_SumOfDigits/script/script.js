function findSum() {
    var num = parseInt(document.getElementById("num").value);
    var sum = 0;

    if (!isNaN(num) && num >= 0) {
        while (num > 0) {
            sum = sum + (num % 10);
            num = Math.floor(num / 10);
        }
        document.getElementById("result").innerText = "Sum of digits: " + sum;
    } else {
        document.getElementById("result").innerText = "! Please enter a valid positive number.";
    }
}
