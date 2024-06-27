function printFactorial(){
    var num = document.getElementById("input").value;
    factorial=1;
    for(var i=1; i<=num ;i++){
	factorial = factorial*i;
    }
    document.getElementById("result").innerText = "Factorial of " + num + " = " +factorial;
}