function findPower(){ 
    var num = parseFloat(document.getElementById("num").value);
    var exp =parseInt(document.getElementById("exp").value);
    var sum = num**exp;
    document.getElementById("result").innerText = "The Power is : "+sum;
}