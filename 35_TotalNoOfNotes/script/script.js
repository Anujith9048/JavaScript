function findState() {
    var num = parseFloat(document.getElementById("num").value);
    num=num.trim();
    var fiveH=0;
    var twoH=0;
    var fifty=0;
    var twenty=0;
    var ten=0;
    var five=0;
    var two=0;
    var one=0;
    if(!isNaN(num)){
	
    if (num >= 500) {
        fiveH = Math.floor(num/500);
	num -= 500 * fiveH;
        document.getElementById("result").innerText += " 500 : " +fiveH+"\n";
    }
    else{
        fiveH = 0;
        document.getElementById("result").innerText += " 500 : " +fiveH+"\n";
    }

    if (num >= 200) {
        twoH = Math.floor(num/200);
	num -= 200 * twoH;
        document.getElementById("result").innerText += " 200 : " +twoH+"\n";
    }
    else{
        twoH = 0;
        document.getElementById("result").innerText += " 200 : " +twoH+"\n";
    }

    if (num >= 100) {
        hund = Math.floor(num/100);
	num -= 100 * hund;
        document.getElementById("result").innerText += " 100 : " +hund+"\n";
    }
    else{
        hund = 0;
        document.getElementById("result").innerText += " 100 : " +hund+"\n";
    }

    if (num >= 50) {
        fifty = Math.floor(num/50);
	num -= 50 * fifty;
        document.getElementById("result").innerText += " 50 : " +fifty+"\n";
    }
    else{
        fifty = 0;
        document.getElementById("result").innerText += " 50 : " +fifty+"\n";
    }

    if (num >= 20) {
        twenty = Math.floor(num/20);
	num -= 20 * twenty;
        document.getElementById("result").innerText += " 20 : " +twenty+"\n";
    }
    else{
        twenty = 0;
        document.getElementById("result").innerText += " 20 : " +twenty+"\n";
    }

    if (num >= 10) {
        ten = Math.floor(num/10);
	num -= 10 * ten;
        document.getElementById("result").innerText += " 10 : " +ten+"\n";
    }
    else{
        ten = 0;
        document.getElementById("result").innerText += " 10 : " +ten+"\n";
    }

    if (num >= 5) {
        five = Math.floor(num/5);
	num -= 5 * five;
        document.getElementById("result").innerText += " 5 : " +five+"\n";
    }
    else{
        five = 0;
        document.getElementById("result").innerText += " 5 : " +five+"\n";
    }

    if (num >= 2) {
        two = Math.floor(num/2);
	num -= 2 * two;
        document.getElementById("result").innerText += " 2 : " +two+"\n";
    }
    else{
        two = 0;
        document.getElementById("result").innerText += " 2 : " +two+"\n";
    }

    if (num >= 1) {
        one = num;
	num -= 1 * one;
        document.getElementById("result").innerText += " 1 : " +one+"\n";
    }
    else{
        one = 0;
        document.getElementById("result").innerText += " 1 : " +one+"\n";
    }
    
   } 
    else{
        document.getElementById("resultError").innerText = num + " is not a number!";
    }
}
