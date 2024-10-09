function print(){
    var num = document.getElementById("input").value;
    if(!isNaN(num)){
    for(var i=num; i>=1; i--){

	document.getElementById("result").innerText += i + "\n";
	
    }
    }
    else{
	document.getElementById("result").innerText ="Not a number";
}
}