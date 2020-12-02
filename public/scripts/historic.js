const elementHistoric = document.querySelector('.containerHistoric');
let historic = JSON.parse(localStorage.getItem('searchHistory'));

function showHistoric() {
    elementHistoric.innerHTML = '';

    const containerClearHistoric = document.createElement('div');
    containerClearHistoric.setAttribute('class', 'clearHistoric');
    const clearHistoric = document.createElement('a');
    clearHistoric.setAttribute('href', '#');
    clearHistoric.setAttribute('onclick', 'clearAllHistoric()');
    const elementClearHistoric = document.createElement('h1');
    const textClearHistoric = document.createTextNode('Limpar dados de navegação');

    elementClearHistoric.appendChild(textClearHistoric);
    clearHistoric.appendChild(elementClearHistoric);
    containerClearHistoric.appendChild(clearHistoric);
    elementHistoric.appendChild(containerClearHistoric);
    
    for(const cardHistoric of historic) {
        const historicDiv = document.createElement('div');
        historicDiv.setAttribute('class', 'historic');
        const imageCardHistoric = document.createElement('img');
        imageCardHistoric.setAttribute('src', cardHistoric.imageCard);
        const nameCardHistoric = document.createElement('h1');
        const numberCardHistoric = document.createElement('h2');
        const textNameCardHistoric = document.createTextNode(cardHistoric.nameCard);
        const textNumberCardHistoric = document.createTextNode(cardHistoric.cardNumber);

        nameCardHistoric.appendChild(textNameCardHistoric);
        numberCardHistoric.appendChild(textNumberCardHistoric);

        const linkElementDelete = document.createElement('a');
        linkElementDelete.setAttribute('href', '#');
        let position = historic.indexOf(cardHistoric);
        linkElementDelete.setAttribute('onclick', 'clearHistoric(' + position + ')');
        const imageDeleteHistoric = document.createElement('img');
        imageDeleteHistoric.setAttribute('src', '../public/images/excluir.svg');

        linkElementDelete.appendChild(imageDeleteHistoric);
        historicDiv.appendChild(imageCardHistoric);
        historicDiv.appendChild(nameCardHistoric);
        historicDiv.appendChild(numberCardHistoric);
        historicDiv.appendChild(linkElementDelete);
        elementHistoric.appendChild(historicDiv);
    }
}

showHistoric();

function clearHistoric(position) {
    historic.splice(position, 1);
    showHistoric();
    saveToStorage();
}

function clearAllHistoric() {
    if(window.confirm("Você realmente deseja limpar o histórico de pesquisas?")) {
        historic = [];
        showHistoric();
        saveToStorage();
    } else {
        showHistoric();
    }
}

function saveToStorage() {
    localStorage.setItem('searchHistory', JSON.stringify(historic));
}