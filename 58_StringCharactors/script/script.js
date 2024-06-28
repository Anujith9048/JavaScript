function findState() {
    document.getElementById("result").innerText =""; 
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;

    for (i = 0; i < len; i++ ){
	document.getElementById("result").innerText += str[i] + "\n"; 
    }
}
