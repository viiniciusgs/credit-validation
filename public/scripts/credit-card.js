mainElement = document.querySelector('#main');

const getCard = JSON.parse(localStorage.getItem('Card'));

const divResult = document.createElement('div');

const textElementNameCard = document.createElement('h1');
const textNameCard = document.createTextNode(`Cartão ${getCard.nameCard}`);

const imageValid = document.createElement('img');
imageValid.setAttribute('src', '../public/images/verificado.svg');

let imageCard = "";

textElementNameCard.appendChild(textNameCard);
divResult.appendChild(textElementNameCard);
divResult.appendChild(imageValid);

mainElement.appendChild(divResult);

switch(getCard.nameCard) {
    case "American Express":
        imageCard = "../public/images/american-express.svg"
        break;
    
    case "Mastercard":
        imageCard = "../public/images/master-card.svg"
        break;

    default:
        imageCard = "../public/images/visa.svg"
        break;
}

const elementImageCard = document.createElement('img');
elementImageCard.setAttribute('src', imageCard);

mainElement.appendChild(elementImageCard);

let historic = JSON.parse(localStorage.getItem('searchHistory')) || [];
historic.push({
    imageCard: imageCard,
    nameCard: getCard.nameCard,
    numberCard: getCard.numberCard
});
localStorage.setItem('searchHistory', JSON.stringify(historic));