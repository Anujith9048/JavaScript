function printNum(){
    var num = document.getElementById("input").value;

    for(var i=1; i<=num; i++){
	if(i % 5 == 0 && i % 11 == 0){
	    document.getElementById("result").innerText += i + "\n";
        }
	
    }
}