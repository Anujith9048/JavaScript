function printFactorial(){
    var num = document.getElementById("input").value;
    if(!isNaN(num)){
    factorial=1;
    for(var i=1; i<=num ;i++){
	factorial = factorial*i;
    }
    document.getElementById("result").innerText = "Factorial of " + num + " = " +factorial;
    }
    else{
        document.getElementById("result").innerText = "Not a Number";
    }
}