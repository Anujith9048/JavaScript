function swapNums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(!isNaN(num1)&&!isNaN(num2)){
    document.getElementById("num1Bef").innerText = "Number 1 is : "+num1;
    document.getElementById("num2Bef").innerText = "Number 2 is : "+num2;

    let temp = num1;
    num1=num2;
    num2=temp;

    document.getElementById("num1Aft").innerText = "Number 1 is : "+num1;
    document.getElementById("num2Aft").innerText = "Number 2 is : "+num2;
    }
    else{
    document.getElementById("num2Aft").innerText = "Not a number";}
}