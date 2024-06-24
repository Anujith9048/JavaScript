
function findState(){

    var num = parseFloat(document.getElementById("num").value);
    if (num % 2 != 0) {
  	document.getElementById("result").innerText = "Odd";
    }
    else{
	document.getElementById("result").innerText = "Even";
    }

}