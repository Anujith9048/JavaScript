function findState() {
    document.getElementById("result").innerText =""; 
    var str = document.getElementById("str").value;
    var substr = document.getElementById("chr").value;
    str = str.trim();
	if(str.startsWith(substr)){
            document.getElementById("result").innerText += substr + " is the prefix of the string"; 
        } 
        else{
	    document.getElementById("result").innerText += substr + " is not the prefix of the string"; 
        }
}