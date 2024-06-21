function findInt(){ 

	    var p = parseFloat(document.getElementById("p").value);
	    var r = parseFloat(document.getElementById("r").value);
	    var t = parseFloat(document.getElementById("t").value);
	    

            
	    var int= p*r*t/100;
            document.getElementById("result").innerText = "The Avg is : "+int+" %";

        }