function findState() {
    var str = document.getElementById("str").value;
    var findStr = document.getElementById("findStr").value;
    var replaceStr = document.getElementById("replaceStr").value;
    if(isNaN(str) && isNaN(findStr) && isNaN(replaceStr)){
        var newStr = str.replace(new RegExp(findStr,'g'), replaceStr);
    
        document.getElementById("result").innerText = newStr;
    }
    else{
         document.getElementById("resultError").innerText = "Enter string without number";
    }
}
