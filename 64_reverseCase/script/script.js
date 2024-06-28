function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    
    for(var i =0;i<len;i++){
        var char = str.charAt(i);
	if( char === char.toUpperCase()){
	     document.getElementById("result").innerText += char.toLowerCase();
	}
        else{
	     document.getElementById("result").innerText += char.toUpperCase();
	}
    }
    
    
}
