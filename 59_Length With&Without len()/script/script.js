function findState() {
    document.getElementById("result").innerText =""; 
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    var length = 0;
    document.getElementById("result").innerText = len + " (With len()) \n"; 

    for (let i of str ){
        length ++; 
    }
    document.getElementById("result").innerText += length + " (WithOut len()) \n";
}
