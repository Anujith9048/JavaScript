function findSum() { 
    var len = parseFloat(document.getElementById("len").value);
    var hei = parseFloat(document.getElementById("hei").value);
    var wid = parseFloat(document.getElementById("wid").value);
    
    var Vol = 0;
    var Are = 0;
    var latAre = 0; 

    if (!isNaN(wid) && !isNaN(len) && !isNaN(hei)) { 

        Are = (21 * wid ) + (21 * hei)+(2 * wid * hei);
        Vol = (len * wid * hei); 
        latAre = 2 * hei * (len +wid); 

        document.getElementById("result-odd").innerText = "Volume = " + Vol.toFixed(2); 
        document.getElementById("result-evn").innerText = "Total Area = " + Are.toFixed(2) +"\n"; 
        document.getElementById("result-evn").innerText += "Lateral Area = " + latAre.toFixed(2); 
    } else {
        document.getElementById("resultError").innerText = "Enter valid numbers !";
    }
}
