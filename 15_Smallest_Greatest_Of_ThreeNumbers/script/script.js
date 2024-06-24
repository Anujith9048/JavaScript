function findSmallGre(){ 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if((num1>num2)&&(num1>num3)){

        document.getElementById("greatNum").innerText = "Greatest Number is : "+num1;
        
    }

    else if((num2>num1)&&(num2>num3)){

        document.getElementById("greatNum").innerText = "Greatest Number is : "+num2;
        
    }

    else if((num3>num1)&&(num3>num2)){

        document.getElementById("greatNum").innerText = "Greatest Number is : "+num3;
        
    }

    if((num1<num2)&&(num1<num3)){

        document.getElementById("smallNum").innerText = "Smallest Number is : "+num1;
        
    }

    else if((num2<num1)&&(num2<num3)){

        document.getElementById("smallNum").innerText = "Smallest Number is : "+num2;
        
    }

    else if((num3<num1)&&(num3<num2)){

        document.getElementById("smallNum").innerText = "Smallest Number is : "+num3;
        
    }
}