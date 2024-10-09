function findCube(){ 
    var num = parseFloat(document.getElementById("num1").value);
    if(!isNaN(num)){
        var sum = num*num*num;
        document.getElementById("result").innerText = "The Cube is : "+sum;
    }
    else{
        document.getElementById("result").innerText = "Not a number";
    }
}