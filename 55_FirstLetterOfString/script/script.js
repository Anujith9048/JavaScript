function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var firstChar=str[0];
    if(isNaN(str)){
        document.getElementById("result").innerText = firstChar;
    }
    else{
        document.getElementById("resultError").innerText = "Enter string without numbers";
    }
}
