function findState() {
    document.getElementById("result").innerText ="";
    var str = document.getElementById("str").value; 
    str = str.trim();
    let lowerStr = str.toLowerCase(); 
    let letterCount = {};
                                   
    for (let i = 0; i < lowerStr.length; i++) { 
        let char = lowerStr[i];
                                                             
        if (char >= 'a' && char <= 'z'){ 
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
	else{
            document.getElementById("resultError").innerText ="Enter a word";
	}                                                    
    }
    var words =JSON.stringify(letterCount).split(",")  
    for(word in words){
	var res= words[word].replace("{",""); 
	res= res.replace("}","");
        document.getElementById("result").innerText += res+"\n";
    }
}