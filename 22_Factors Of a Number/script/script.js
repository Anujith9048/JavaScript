function printFactors(){
    var num = document.getElementById("input").value;
    if(!isNaN(num)){
    for(var i=1; i<num ;i++){
	if(num%i==0){
	    document.getElementById("result").innerText = i + "\n";
        }
    }
    }
    else{
	document.getElementById("result").innerText = "Not a number";
}
}