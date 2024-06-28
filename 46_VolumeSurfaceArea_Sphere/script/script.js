function findSum() { 
    var r = parseFloat(document.getElementById("rad").value);
    
    var Vol = 0;
    var Are = 0;
    var latAre = 0; 
    var tbSA = 0;

    if (!isNaN(r)) { 

        Are = 4 * 3.14 * r * r;
        Vol = 4 * 3.14 * r * r * r; 
        latAre = Math.sqrt(Are)/(4 * 3.14); 

        document.getElementById("result-odd").innerText = "Volume = " + Vol.toFixed(2); 
        document.getElementById("result-evn").innerText = "Total Area = " + Are.toFixed(2) +"\n"; 
    } else {
        document.getElementById("resultError").innerText = "Enter valid numbers !";
    }
}
