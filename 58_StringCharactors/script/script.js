function findState() {
    document.getElementById("result").innerText =""; 
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    if(isNaN(str)){
        for (i = 0; i < len; i++ ){
	    document.getElementById("result").innerText += str[i] + "\n"; 
        }
    }
    else{
	document.getElementById("resultError").innerText += "Enter string without numbers";
    }
}
