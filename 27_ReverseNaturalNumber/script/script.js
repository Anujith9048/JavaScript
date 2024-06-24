function print(){
    var num = document.getElementById("input").value;

    for(var i=num; i>=1; i--){

	document.getElementById("result").innerText += i + "\n";
	
    }
}