function addnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(!isNaN(num1)&&!isNaN(num2)){
    var sum = num1 + num2;
    document.getElementById("result").innerText = "The Sum is : "+sum;
    }
    else{
    document.getElementById("result").innerText = "Not a number";
    }
}

function subnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(!isNaN(num1)&&!isNaN(num2)){
    var sum = num1 - num2;
    document.getElementById("result").innerText = "The Difference is : "+sum;
    }
    else{
    document.getElementById("result").innerText = "Not a number";
    }
}

function mulnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(!isNaN(num1)&&!isNaN(num2)){
    var sum = num1 * num2;
    document.getElementById("result").innerText = "The Product is : "+sum;
    }
    else{
    document.getElementById("result").innerText = "Not a number";
    }
}

function divnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(!isNaN(num1)&&!isNaN(num2)){
    var sum = num1 / num2;
    document.getElementById("result").innerText = "The Division is : "+sum;
    }
    else{
    document.getElementById("result").innerText = "Not a number";
    }
}
