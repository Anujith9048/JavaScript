function print(){

    var limit=100;
    var i=1;

    function printNext(){

	if (i<=limit){
	document.getElementById("result").innerText += i + "\n";
	i++;
        setTimeout(printNext, 100);
    }

    }
    printNext();
    

}