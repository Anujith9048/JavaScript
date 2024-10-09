function check(){
    var num = document.getElementById("input").value;
    var factSum = 0;
    if(!isNaN(num)){
        for(var i=1; i<num ;i++){
	    if(num%i==0){
	        factSum = factSum + i;
            }
        }
        if(factSum == num){
	    document.getElementById("result").innerText = num + " is a perfect number";
        }
        else{
	    document.getElementById("result").innerText = num + " is not a perfect number"

        }
    }
    else{
	alert( num+" is not a Number")
    }
}