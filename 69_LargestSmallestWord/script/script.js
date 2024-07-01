function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var words = str.split(' ');
    var large ='';
    var small = '';

    for(let word in words){
	if(words[word].length > large.length){
	    large = words[word];
	}
        else if(words[word].length < small.length || small ===''){
	    small = words[word];
        }
    }
    document.getElementById("result").innerText = "Largest : "+large+"\n";
    document.getElementById("result").innerText += "Smallest : "+small+"\n";
}
