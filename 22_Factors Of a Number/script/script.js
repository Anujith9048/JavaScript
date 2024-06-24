function printFactors(){
    var num = document.getElementById("input").value;

    for(var i=1; i<num ;i++){
	if(num%i==0){
	    document.getElementById("result").innerText += i + "\n";
        }
    }
}