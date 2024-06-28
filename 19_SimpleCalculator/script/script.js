var buttons = document.querySelectorAll('input[type="button"]');
var input = document.getElementById('display');
var firstNumber = '';
var operator = '';
var resetInput = false;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    var value = event.target.value;
    console.log('Button clicked:', event.target.value);

    
    if(value==='C'){
	input.value ='';
    }

    else if (value === '+' || value === '-' || value === 'x' || value === '/') {
      if (input.value !== '') {
        firstNumber = input.value;
        operator = value;
        resetInput = true;
      }
    }

    else if (value === '=') {
      if (firstNumber !== '' && operator !== '') {
        var secondNumber = input.value;
        input.value = calculate(firstNumber, secondNumber, operator);
        firstNumber = '';
        operator = '';
        secondNumber='';
        resetInput = true;
      }
    }

     else {
      if (resetInput) {
        input.value = value;
        resetInput = false;
      } else {
        input.value = value;
      }
    }
  });
}

function calculate(num1, num2, op) {
  var n1 = parseFloat(num1);
  var n2 = parseFloat(num2);
  switch (op) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case 'x':
      return n1 * n2;
    case '/':
      return n2 !== 0 ? n1 / n2 : 'Division by 0 is not possible';
    default:
      return 'Error';
  }
}