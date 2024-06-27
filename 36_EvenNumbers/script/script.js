function print(){
    var num = document.getElementById("input").value;

    if(!isNaN(num)){
    for(var i=0; i<=num; i=i+2){
	document.getElementById("result").innerText += i + "\n";
	
    }
    }
    else{
	document.getElementById("resultError").innerText +="Enter a valid number";
    }
}