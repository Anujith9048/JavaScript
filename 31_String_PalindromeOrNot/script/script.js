function check() {
    var str = document.getElementById("str").value;
    var strRev =  str.split('').reverse().join('');

    if( str == strRev ){
	var str = document.getElementById("result").innerText = str +" is palindrome";
    }

    else{
	var str = document.getElementById("result").innerText = str +" is not palindrome";
    }
}
