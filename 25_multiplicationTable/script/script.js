function printMT(){
    var num = document.getElementById("input").value;

    for(var i=1; i<=10; i++){
	var mt = num*i;
	document.getElementById("result").innerText += i + " x " + num + " = " + mt +"\n";
    }
}