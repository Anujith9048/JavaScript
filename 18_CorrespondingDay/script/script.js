function findDay(){ 
    var num = parseFloat(document.getElementById("num").value);

    let day;
    switch (num) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
}
document.getElementById("result").innerText = "Today is " + day;
}