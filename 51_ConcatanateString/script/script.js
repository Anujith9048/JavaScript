function findState() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    
    if(isNaN(str1) && isNaN(str2)){
        document.getElementById("result").innerText = str1 + str2;
    }
    else{
        document.getElementById("resultError").innerText = "Enter String";
    }
}
