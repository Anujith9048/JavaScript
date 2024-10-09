function findState() {
    var num = parseFloat(document.getElementById("num").value);
    var rev=0;
    var numCopy = num;

    if(!isNaN(num)){
        while (num > 0) {
	    rev = rev*10;
            rev = rev + (num % 10);
            num = Math.floor(num / 10);
        }
    if(rev === numCopy){
        document.getElementById("result").innerText = rev + " is a Palindrome number!";
    }
    else {
        document.getElementById("result").innerText = numCopy + " is not a Palindrome number!";
    }
    }
    else{
        document.getElementById("resultError").innerText =  " Enter a valid number!";
    }
}
