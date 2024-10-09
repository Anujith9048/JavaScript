
function findSum(){ 
    var num = parseFloat(document.getElementById("num").value);
    var oddSum =0;
    var evnSum=0;
    if(!isNaN(num)){

        for(var i =1;i<=num;i++){
 	    if(i%2==0){
    	        evnSum = evnSum+i;
    	        document.getElementById("result-evn").innerText = "Even Sum is : "+evnSum;
	    }
	    else{
    	        oddSum = oddSum+i;
    	        document.getElementById("result-odd").innerText = "Odd Sum is : "+oddSum;
	    }
        }
    }
    else{
    	document.getElementById("resultError").innerText = "Enter a valid number!";
    }
}