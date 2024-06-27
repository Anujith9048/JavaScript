
function findSum(){ 
    var num = parseFloat(document.getElementById("num").value);
    var sum =0;
    if(!isNaN(num)){

        for(var i =1;i<=num;i=i+2){
    	    sum = sum+i;
    	    document.getElementById("result-sum").innerText = "The Sum is : "+sum;

        }
    }
    else{
    	document.getElementById("resultError").innerText = "Enter a valid number!";
    }
}