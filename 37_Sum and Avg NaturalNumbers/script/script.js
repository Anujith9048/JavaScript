
function findSumAvg(){ 
    var num = parseFloat(document.getElementById("num").value);
    var sum =0;
    if(!isNaN(num)){

        for(var i =1;i<=num;i++){
    	    sum = sum+i;
    	    document.getElementById("result-sum").innerText = "The Sum is : "+sum;

    	    var avg= sum / num;
    	    document.getElementById("result-avg").innerText = "The Avg is : "+avg;

        }
    }
    else{
    	document.getElementById("resultError").innerText = "Enter a valid number!";
    }
}