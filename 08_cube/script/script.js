function findCube(){ 
    var num = parseFloat(document.getElementById("num1").value);

    var sum = num*num*num;
    document.getElementById("result").innerText = "The Cube is : "+sum;
}