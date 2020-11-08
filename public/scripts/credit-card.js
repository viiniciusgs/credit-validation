mainElement = document.querySelector('#main');

const getCard = localStorage.getItem("Card");
const elementCard = document.createElement('h1');
const textCard = document.createTextNode(getCard);

elementCard.appendChild(textCard);
mainElement.appendChild(elementCard);