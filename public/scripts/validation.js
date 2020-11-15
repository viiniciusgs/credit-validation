formElement = document.querySelector('#searchCard');
inputElement = document.querySelector('#numberCard');
buttonElement = document.querySelector('#buttonSearchCard');

formElement.onsubmit = function(event) {
    event.preventDefault();
    validationCredit();
}

buttonElement.onclick = function() {
    validationCredit();
}

function validationCredit() {
    const creditCard = inputElement.value;
    var initialNumber = creditCard;
    var repeatI;
    var repeatJ;

    if(!creditCard) {
        alert('Digite um número de cartão'); 
        inputElement.value = '';
        return;
    }

    while(initialNumber >= 99) {
        initialNumber  /= 10;
    }

    if(Math.trunc(initialNumber) == 34 || Math.trunc(initialNumber) == 37) {
        var repeatI = 100000000000000;
        var repeatJ = 1000000000000000;

        luhnsAlgorithm(creditCard, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'American Express',
            numberCard: creditCard.toString()
        }));
    }

    else if(Math.trunc(initialNumber) >= 51 && Math.trunc(initialNumber) <= 55) {
        var repeatI = 10000000000000000;
        var repeatJ = 1000000000000000;
        
        luhnsAlgorithm(creditCard, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Mastercard',
            numberCard: creditCard.toString()
        }));
    }

    else if(creditCard >= 4000000000000 && creditCard <= 5000000000000) {
        var repeatI = 1000000000000;
        var repeatJ = 10000000000000;
        
        luhnsAlgorithm(creditCard, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Visa',
            numberCard: creditCard.toString()
        }));
    }

    else if(creditCard >= 4000000000000000 && creditCard <= 5000000000000000) {
        var repeatI = 10000000000000000;
        var repeatJ = 1000000000000000;
        
        luhnsAlgorithm(creditCard, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Visa',
            numberCard: creditCard.toString()
        }));
    }

    else {
        alert('Número de cartão inválido'); 
        inputElement.value = '';
        return;
    }
}

function luhnsAlgorithm(creditCard, repeatI, repeatJ) {
    var calculate = 0;

    for(var i = 100; i <= repeatI; i*= 100) {
        var digits = Math.trunc((creditCard % i) / (i / 10));
        var multiplyDigits = digits * 2;
    
        if(multiplyDigits > 9) {
            calculate += multiplyDigits % 10;
            calculate += Math.trunc(multiplyDigits / 10);
        }
        else {
            calculate += multiplyDigits;
        }
    }

    for (var j = 10; j <= repeatJ; j *= 100) {
        var digits = Math.trunc((creditCard % j) / (j / 10));
        calculate += digits;
    }

    if(calculate % 10 == 0) {
        window.location.href = "../pages/credit-card.html"
        inputElement.value = '';
    }
    else {
        alert('Número de cartão inválido'); 
        inputElement.value = '';
        return;
    }
}