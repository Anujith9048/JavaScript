
function findState(){

    var num = parseFloat(document.getElementById("num").value);
    if(!isNaN(num)){
    if (num % 2 != 0) {
  	document.getElementById("result").innerText = "Odd";
    }
    else{
	document.getElementById("result").innerText = "Even";
    }
    }
    else{
	document.getElementById("result").innerText = "Not a number";
    }

}