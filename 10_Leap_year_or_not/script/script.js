
function findLeap(){

    var year = parseInt(document.getElementById("year").value);
    if ((year % 4 == 0)&&(year % 100 != 0) || (year % 400 ==0)) {
  	document.getElementById("result").innerText = "YES! it's a Leap Year...";
    }
    else{
	document.getElementById("result").innerText = "NO! it's not a Leap Year...";
    }

}