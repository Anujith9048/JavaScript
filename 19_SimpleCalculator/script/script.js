function calculate(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var ope = parseInt(document.getElementById("num").value);

    let day;
    switch (ope) {
      case 1:
        result = num1+num2;
        break;
      case 2:
        result = "num1-num2;
        break;
      case 3:
        result = num1*num2;
        break;
      case 4:
        result = "num1/num2;
        break;
}
document.getElementById("result").innerText = "Answer is " + result;
}