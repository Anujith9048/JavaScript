function findState() {
    var str =document.getElementById("str").value;
    var str = str.trim();
    let total = 0;
    
    for (let i = 0; i < str.length; i++) {
        total += str.charCodeAt(i);
    }
    document.getElementById("result").innerText="The ASCII value of the string is: " +total;
}
