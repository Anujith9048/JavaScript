function findSum() { 
    var len = parseFloat(document.getElementById("len").value);
    
    var Vol = 0;
    var Are = 0;
    var latAre = 0; 

    if (!isNaN(len)) { 

        Are = 6 * len * len;
        Vol = len * len * len; 
        latAre = 4 * (len * len); 

        document.getElementById("result-odd").innerText = "Cube Volume = " + Vol.toFixed(2); 
        document.getElementById("result-evn").innerText = "Surface Area = " + Are.toFixed(2) +"\n"; 
        document.getElementById("result-evn").innerText += "Lateral Area = " + latAre.toFixed(2); 
    } else {
        document.getElementById("resultError").innerText = "Enter valid numbers !";
    }
}
