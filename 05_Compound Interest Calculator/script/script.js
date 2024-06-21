function findInt(){ 

	    var p = parseFloat(document.getElementById("p").value);
	    var r = parseFloat(document.getElementById("r").value);
	    var t = parseFloat(document.getElementById("t").value);
	    

            var A= p*(1 + r/100)**t;
	    var int= A-p;
            document.getElementById("result").innerText = "The Avg is : "+int+" %";

        }