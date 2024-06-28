function findPro() {
    var num = parseInt(document.getElementById("num").value);
    var pro = 1;

    if (!isNaN(num) && num >= 0) {
        while (num > 0) {
            pro = pro * (num % 10);
            num = Math.floor(num / 10);
        }
        document.getElementById("result").innerText = "Product of digits: " + pro;
    } else {
        document.getElementById("result").innerText = "! Please enter a valid positive number.";
    }
}
