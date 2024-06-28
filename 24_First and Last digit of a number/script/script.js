function printFirstandLast(){
    var num = document.getElementById("input").value;
    var lastDig=num%10;
    for(var i=0; num>10 ;i++){
	num=num/10;
    }
    num=Math.trunc(num);
    document.getElementById("resultFirst").innerText = "First Digit = " +num;
    document.getElementById("resultLast").innerText = "Last Digit = " +lastDig;

}