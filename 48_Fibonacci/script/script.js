function findSum() {
    document.getElementById("result").innerText = "";
    var num = parseInt(document.getElementById("num").value);
    var sum = 1;
    var fib = 0;
    var temp = 0;
    if (!isNaN(num) && num >= 0) {
        for (i=0;i<=num;i++){
            document.getElementById("result").innerText += + fib;
	    temp = fib;
	    fib = sum + fib;
	    sum = temp;
        }
    } else {
        document.getElementById("result").innerText = "! Please enter a valid positive number.";
    }
}
