mainElement = document.querySelector('#main');

const getCard = localStorage.getItem("Card");
const elementResult = document.createElement('div');
const elementCard = document.createElement('h2');
const textCard = document.createTextNode(`Cartão ${getCard}`);
const elementValid = document.createElement('h1');
const textValid = document.createTextNode('VÁLIDO');

let imageCard = "";

elementCard.appendChild(textCard);
elementValid.appendChild(textValid);
elementResult.appendChild(elementCard);
elementResult.appendChild(elementValid);

mainElement.appendChild(elementResult);

switch(getCard) {
    case "American Express":
        imageCard = "/public/images/american-express.svg"
        break;
    
    case "Mastercard":
        imageCard = "/public/images/master-card.svg"
        break;

    default:
        imageCard = "/public/images/visa.svg"
        break;
}

const elementImageCard = document.createElement('img');
elementImageCard.setAttribute('src', imageCard);

mainElement.appendChild(elementImageCard);