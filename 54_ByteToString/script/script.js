function findState() {

    const byte = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
    const result = String.fromCharCode(...byte); 
   
    document.getElementById("result").innerText=result;

}
