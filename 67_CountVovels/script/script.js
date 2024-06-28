function findState() {
    var str = document.getElementById("str").value;
    var vowel = "aeiouAEIOU";
    var vowelStack = [];
    str = str.trim();
    var vowelCount =0;
    var consCount =0;
    var len = str.length;
    
    for(i=0;i<len;i++){
 	var char = str.charAt(i);     
	if(vowel.includes(char)){     
	    vowelCount++;    
        } 
        else{
	    consCount++;
	}                            
    }
    document.getElementById("result").innerText=" Vowels : "+vowelCount+"\n Consonents : "+ consCount;
    
}
