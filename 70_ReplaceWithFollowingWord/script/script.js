function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    if(isNaN(str)){
    var newStr = str.replace(/[a-z]/gi,function(char){
        if(char === 'z' || char === 'Z'){
	    return 'a';
	}
        else{
	    return String.fromCharCode(char.charCodeAt(0)+1);
	}
    });
    document.getElementById("result").innerText = newStr;
    }
    else{
	document.getElementById("resultError").innerText = "Enter string without numbers";
    }
}
