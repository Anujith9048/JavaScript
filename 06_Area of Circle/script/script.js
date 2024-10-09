
function findArea(){ 
    var r = parseFloat(document.getElementById("radius").value);
    if(!isNaN(r)){
        var area= 3.14 *r*r;
        document.getElementById("result").innerText = "The Area is : "+area;
    }
    else{
        document.getElementById("result").innerText = "Not a number"
    }
}