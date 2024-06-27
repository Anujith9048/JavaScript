
        function findArea(){ 

	    var r = parseFloat(document.getElementById("radius").value);

            var area= 3.14 *r*r;
            document.getElementById("result").innerText = "The Area is : "+area;

        }