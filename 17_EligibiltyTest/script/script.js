function findAligibility(){ 
    var mat = parseFloat(document.getElementById("mat").value);
    var phy = parseFloat(document.getElementById("phy").value);
    var che = parseFloat(document.getElementById("che").value);
    if(!isNaN(mat)&&!isNaN(che)&&!isNaN(phy)){
    var total = mat+phy+che;
    var matPhy = mat+phy;

    if((mat >= 65)&&(phy >= 55)&&(che >= 50)){
    
        if((total >= 190)||(matPhy >= 140)){
            document.getElementById("result").innerText = "Candidate is eligible";
        } 
        else{
            document.getElementById("result").innerText = "Candidate is not eligible";
        }
    }
    }
    else{
      document.getElementById("result").innerText = "Check the marks entered";
   }
}