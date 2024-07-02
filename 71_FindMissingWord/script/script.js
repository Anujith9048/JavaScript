function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    str = str.toUpperCase();
  
    if(!isNaN(str)){
	document.getElementById("resultError").innerText = "Enter letters";
	document.getElementById("result").innerText = "";
    }
    else{
	document.getElementById("resultError").innerText = "";
	
	if(str.length === 0){
	    document.getElementById("result").innerText = "No letters found";
        }

        let firstCharCode = str.charCodeAt(0);
	let mis = null;
        for(var i=0;i<str.length;i++){
	    if(str.charCodeAt(i)!=firstCharCode +i){
		mis = String.fromCharCode(firstCharCode + i);
	    }
	    else{
		document.getElementById("result").innerText = "No missing letter found";
	    }
	}
	if(mis){
	    document.getElementById("result").innerText = "Missing letter : "+mis;
        }
    }  
}
