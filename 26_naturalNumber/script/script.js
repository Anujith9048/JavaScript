function print(){
    var num = document.getElementById("input").value;

    for(var i=1; i<=num; i++){

	document.getElementById("result").innerText += i + "\n";
	
    }
}