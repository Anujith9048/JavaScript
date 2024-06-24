function addnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = num1 + num2;
    document.getElementById("result").innerText = "The Sum is : "+sum;
}

function subnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = num1 - num2;
    document.getElementById("result").innerText = "The Difference is : "+sum;
}

function mulnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = num1 * num2;
    document.getElementById("result").innerText = "The Product is : "+sum;
}

function divnums(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = num1 / num2;
    document.getElementById("result").innerText = "The Division is : "+sum;
}
