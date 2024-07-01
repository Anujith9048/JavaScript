function printMT(){
    var num = document.getElementById("input").value;
    if(!isNaN(num)){
    for(var i=1; i<=10; i++){
	var mt = num*i;
	document.getElementById("result").innerText += i + " x " + num + " = " + mt +"\n";
    }
    }
    else{
	document.getElementById("result").innerText ="Not a number";
}
}