function findInt(){ 
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);
	    
    if(!isNaN(p)&&!isNaN(t)&&!isNaN(r)){
        var A= p*(1 + r/100)**t;
        var int= A-p;
        document.getElementById("result").innerText = "The Avg is : "+int+" %";
    }
    else{
        document.getElementById("result").innerText = "Not a number";
    }
}