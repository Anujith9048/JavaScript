function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    var lastChar=str[len - 1];
    document.getElementById("result").innerText = lastChar;

}
