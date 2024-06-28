function printGross() {
    var sal = parseInt(document.getElementById("input").value); 
    var gross = 0;
    var hra =0;
    var da= 0;

    if (!isNaN(sal)) {
        if (sal <= 10000) {
            hra =(sal/100)*8;
            da =(sal/100)*10;
        } else if (sal <= 20000) {
            hra =(sal/100)*16;
            da =(sal/100)*20;
        } else if (sal > 20000) {
            hra =(sal/100)*24;
            da =(sal/100)*30;
        }
	gross = hra+da+sal;
        document.getElementById("result").innerText = "HRA: " + hra+"\n";
        document.getElementById("result").innerText += "da: " + da+"\n";
        document.getElementById("result").innerText += "Gross Salary: " + gross +"\n";
    } else {
        document.getElementById("resultError").innerText = "Enter a valid unit!"; 
 }
}
