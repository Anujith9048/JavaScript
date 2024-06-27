function findSum() { 
    var len = parseFloat(document.getElementById("len").value);
    var hei = parseFloat(document.getElementById("hei").value);
    var rad = parseFloat(document.getElementById("rad").value);
    
    var oddVol = 0;
    var evnAre = 0;
    var latAre = 0; 

    if (!isNaN(rad) && !isNaN(len) && !isNaN(hei)) { 

        evnAre = (3.14 * rad * len) + (3.14 * rad * rad);
        oddVol = (1/3) * (3.14 * rad * rad * hei); 
        latAre = 3.14 * rad * len; 

        document.getElementById("result-odd").innerText = "Volume = " + oddVol.toFixed(2); 
        document.getElementById("result-evn").innerText = "Cone Area = " + evnAre.toFixed(2) +"\n"; 
        document.getElementById("result-evn").innerText += "Lateral Area = " + latAre.toFixed(2); 
    } else {
        document.getElementById("resultError").innerText = "Enter valid numbers !";
    }
}
