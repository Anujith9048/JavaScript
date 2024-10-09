function findDay(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var ope = parseFloat(document.getElementById("ope").value);

    if (!isNaN(num1) && !isNaN(num2)){
	let res;
        switch (ope) {
          case 1:
            res = num1+num2;
            document.getElementById("result").innerText = num1+" + "+num2+" = " + res;
            break;
          case 2:
            res = num1-num2;
            document.getElementById("result").innerText = num1+" - "+num2+" = " + res;
            break;
          case 3:
            res = num1*num2;
            document.getElementById("result").innerText = num1+" * "+num2+" = " + res;
            break;
          case 4:
            res = num1/num2;
            document.getElementById("result").innerText = num1+" / "+num2+" = " + res;
            break;
          default:
            document.getElementById("result").innerText = ope+" is an
 unknown operator!";
        }
    }
    else{
       document.getElementById("resultError").innerText = "Enter a valid Number";
    }
}