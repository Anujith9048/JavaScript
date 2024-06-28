function findState() {
    var str = document.getElementById("str").value;
    var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var vowelStack = [];
    str = str.trim();
    var alphN =0;
    var numN =0;
    var symN =0;
    var len = str.length;
    
    for(i=0;i<len;i++){
 	var char = str.charAt(i);     
	if(alph.includes(char)){     
	    alphN++;    
        }     
	else if(num.includes(char)){     
	    numN++;    
        }     
	else{     
	    symN++;    
        }                              
    }    
    document.getElementById("result").innerText=" Letters : "+alphN+" \n Numbers : "+numN+" \n Symbols : "+symN;
    
}
