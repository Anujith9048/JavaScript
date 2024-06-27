function printBill() {
    var unit = parseInt(document.getElementById("input").value); 
    var bill = 0;

    if (!isNaN(unit)) {
        if (unit <= 50) {
            bill = unit * 2.60;
        } else if (unit > 50 && unit <= 100) {
            bill = 50 * 2.60; 
            bill += (unit - 50) * 3.25;
        } else if (unit > 100 && unit <= 200) {
            bill = 50 * 2.60; 
            bill += 50 * 3.25; 
            bill += (unit - 100) * 5.65; 
        } else if (unit > 200) {
            bill = 50 * 2.60; 
            bill += 50 * 3.25; 
            bill += 100 * 5.65;
            bill += (unit - 200) * 7.25;
	}

        if (unit > 700) {
            bill += (unit / 100) * 0.5; 
        }

        document.getElementById("result").innerText = "Bill Amount: " + bill + " Rs";
    } else {
        document.getElementById("resultError").innerText = "Enter a valid unit!"; 
 }
}
