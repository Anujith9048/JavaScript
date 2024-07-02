function findState() {
    document.getElementById("result").innerText ="Index = "; 
    var str = document.getElementById("str").value;
    var chr = document.getElementById("chr").value;
    str = str.trim();
    var len = str.length;
    var flag =0;
    if(isNaN(str) && isNaN(chr)){
	document.getElementById("resultError").innerText ="";
        for (i = 0; i < len; i++ ){
	    if(str[i]===chr){
                document.getElementById("result").innerText +=" "+ i +" ,"; 
            } 
            else{
	        flag++;
            }
        }
        if(flag === len){
            document.getElementById("result").innerText =" No Character found"; 
        } 
    }
    else{
        document.getElementById("resultError").innerText ="Enter string without Numbers"; 
    }
}