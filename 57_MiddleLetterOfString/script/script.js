function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var len = str.length;
    var mid =Math.floor( len/2 );
    var midChar=str[mid];
    console.log(mid , midChar);
    if(isNaN(str)){
        if (len % 2 !=0){
            document.getElementById("result").innerText ="Middle Charecter "+ midChar;
        }
        else{
            document.getElementById("result").innerText = "The string has no perfect middle element";

            document.getElementById("resultError").innerText = "";
        }
    }
    else{
        document.getElementById("resultError").innerText = "Enter string without numbers";
        document.getElementById("result").innerText = "";
    }
}
