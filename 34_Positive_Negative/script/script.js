function findState() {
    var num = parseFloat(document.getElementById("num").value);

    if(!isNaN(num)){
	
    if (num >= 0) {
        document.getElementById("result").innerText = num + " is a positive number!";
       
    } 
    else {
        document.getElementById("result").innerText = num + " is a negative number!";
    }
    }
    else{
        document.getElementById("resultError").innerText = num + " is not a number!";
    }
}
