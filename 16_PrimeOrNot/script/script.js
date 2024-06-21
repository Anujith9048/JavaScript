function findState() {
    var num = parseFloat(document.getElementById("num").value);
    let isPrime = true;

    if (num === 1) {
        document.getElementById("result").innerText = num + " can be prime or composite";
    } else if (num > 1) {
        for (let i = 2; i < num; i++) { 
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
      
        if (isPrime) {
            document.getElementById("result").innerText = num + " is not a Prime number!";
        } else {
            document.getElementById("result").innerText = num + " is a Prime number!";
        }
    } else {
        document.getElementById("result").innerText = num + " is not a Prime number!";
    }
}
