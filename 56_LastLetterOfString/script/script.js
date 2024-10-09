function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    var lastChar=str[len - 1];
    if(isNaN(str)){
        document.getElementById("result").innerText = lastChar;
    }
    else{
        document.getElementById("resultError").innerText = "Enter string without numbers";
    }
}
