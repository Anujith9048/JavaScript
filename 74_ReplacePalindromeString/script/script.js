function findState() {
    var str = document.getElementById("str").value;
    str = str.trim();
    var words = str.split(' ');
    var newStr = '';
    for (let word of words) {
        var revWord = word.split('').reverse().join('');
        console.log(revWord)
        if (word === revWord) {
            for (let i in word) {
                newStr += '*';
            }
        } else {
            newStr += word;
        }
        newStr += ' '; 
    }
    newStr = newStr.trim();
    document.getElementById("result").innerText = newStr;
}
