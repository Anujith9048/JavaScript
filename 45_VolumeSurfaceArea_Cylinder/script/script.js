function findSum() { 
    var r = parseFloat(document.getElementById("rad").value);
    var h = parseFloat(document.getElementById("hei").value);
    
    var Vol = 0;
    var Are = 0;
    var latAre = 0; 
    var tbSA = 0;

    if (!isNaN(r) && !isNaN(h)) { 

        Are = (2 * 3.14 * r * r)+(2 * 3.14 * r * h);
        Vol = (3.14 * r * r * h); 
        latAre = 2 * 3.14 * r * h; 
	tbSA=3.14 * r * r;

        document.getElementById("result-odd").innerText = "Volume = " + Vol.toFixed(2); 
        document.getElementById("result-evn").innerText = "Total Area = " + Are.toFixed(2) +"\n"; 
        document.getElementById("result-evn").innerText += "Lateral Area = " + latAre.toFixed(2) +"\n";
        document.getElementById("result-evn").innerText += "Top or Bottom surface Area = " + tbSA.toFixed(2); 
    } else {
        document.getElementById("resultError").innerText = "Enter valid numbers !";
    }
}
