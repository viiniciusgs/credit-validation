formElement = document.querySelector('#searchCard');
inputElement = document.querySelector('#cardNumber');
buttonElement = document.querySelector('#buttonSearchCard');

formElement.onsubmit = function(event) {
    event.preventDefault();
    validationCredit();
}

buttonElement.onclick = function() {
    validationCredit();
}

function validationCredit() {
    const creditCardNumber = inputElement.value;
    let repeatI;
    let repeatJ;

    if(!creditCardNumber) {
        alert('Digite um número de cartão'); 
        inputElement.value = '';
        return;
    }

    if((creditCardNumber >= 340000000000000 && creditCardNumber < 350000000000000) || 
    (creditCardNumber >= 370000000000000 && creditCardNumber < 380000000000000)) {
        repeatI = 100000000000000;
        repeatJ = 1000000000000000;

        luhnsAlgorithm(creditCardNumber, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'American Express',
            cardNumber: creditCardNumber.toString()
        }));
    }

    else if((creditCardNumber >= 5100000000000000 && creditCardNumber < 5600000000000000 ) ||
    (creditCardNumber >= 2200000000000000 && creditCardNumber < 2300000000000000)) {
        repeatI = 10000000000000000;
        repeatJ = 1000000000000000;
        
        luhnsAlgorithm(creditCardNumber, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Mastercard',
            cardNumber: creditCardNumber.toString()
        }));
    }

    else if(creditCardNumber >= 4000000000000 && creditCardNumber < 5000000000000) {
        repeatI = 1000000000000;
        repeatJ = 10000000000000;
        
        luhnsAlgorithm(creditCardNumber, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Visa',
            cardNumber: creditCardNumber.toString()
        }));
    }

    else if(creditCardNumber >= 4000000000000000 && creditCardNumber < 5000000000000000) {
        repeatI = 10000000000000000;
        repeatJ = 1000000000000000;
        
        luhnsAlgorithm(creditCardNumber, repeatI, repeatJ);

        localStorage.setItem('Card', JSON.stringify({
            nameCard: 'Visa',
            cardNumber: creditCardNumber.toString()
        }));
    }

    else {
        alert('Número de cartão inválido'); 
        inputElement.value = '';
    }
}

function luhnsAlgorithm(creditCardNumber, repeatI, repeatJ) {
    let calculate = 0;

    for(let i = 100; i <= repeatI; i*= 100) {
        let digits = Math.trunc((creditCardNumber % i) / (i / 10));
        let multiplyDigits = digits * 2;
    
        if(multiplyDigits > 9) {
            calculate += multiplyDigits % 10;
            calculate += Math.trunc(multiplyDigits / 10);
        }
        else {
            calculate += multiplyDigits;
        }
    }

    for (let j = 10; j <= repeatJ; j *= 100) {
        let digits = Math.trunc((creditCardNumber % j) / (j / 10));
        calculate += digits;
    }

    if(calculate % 10 == 0) {
        window.location.href = "/pages/credit-card.html"
        inputElement.value = '';
    }
    else {
        alert('Número de cartão inválido'); 
        inputElement.value = '';
    }
}