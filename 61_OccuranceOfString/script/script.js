function findState() {
    document.getElementById("result").innerText =""; 
    var str = document.getElementById("str").value;
    var chr = document.getElementById("chr").value;
    str = str.trim();
    var len = str.length;
    var flag =0;

    for (i = 0; i < len; i++ ){
	if(str[i]===chr){
            document.getElementById("result").innerText += chr+" is in the string"; 
        } 
        else{
	    flag++;
        }
    }
    if(flag === len){
        document.getElementById("result").innerText =" No Character found"; 
    } 
}