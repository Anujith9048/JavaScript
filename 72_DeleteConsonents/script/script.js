function findState() {
    var str = document.getElementById("str").value;
    var vowel = "aeiouAEIOU";
    str = str.trim();
    var newStr ='';
    var len = str.length;
    
    if(isNaN(str)){
        for(i=0;i<len;i++){
	
            document.getElementById("result").innerText="";
 	    var char = str.charAt(i);     
	    if(vowel.includes(char)){     
	        newStr+=char;    
            }                            
        }
        document.getElementById("result").innerText+=newStr;
    }
    else{
        document.getElementById("resultError").innerText+="Do not enter numbers!";
    }
}
