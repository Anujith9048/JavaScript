function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var firstChar=str[0];
    document.getElementById("result").innerText = firstChar;

}
