function findState() {
    var str = document.getElementById("str").value;
    var vowel = "aeiouAEIOU";
    var vowelStack = [];
    str = str.trim();
    var revStr ="";
    var len = str.length;
    if(isNaN(str)){
        for(i=0;i<len;i++){
     	    var char = str.charAt(i);     
	    if(vowel.includes(char)){     
	        vowelStack.push(char);    
            }                             
        }                                 

        for(i=0;i<len;i++){               
	    var char = str.charAt(i);  
       
	    if(vowel.includes(char)){     
	        revStr += vowelStack.pop();
	    }
            else{
                revStr += char;
            }
        }
        document.getElementById("result").innerText=revStr;
    }
    else{
        document.getElementById("resultError").innerText="Enter string without numbers";
}
    
}
