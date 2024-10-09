function findPower(){ 
    var num = parseFloat(document.getElementById("num").value);
    var exp =parseInt(document.getElementById("exp").value);
    if(!isNaN(num)&&!isNaN(exp)){
       var sum = num**exp;
       document.getElementById("result").innerText = "The Power is : "+sum;
    }
    else{
       document.getElementById("result").innerText = "Not a number";}
}