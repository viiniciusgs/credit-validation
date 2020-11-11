const tableHistoric = document.querySelector('.tableHistoric');
const column = document.createElement('td');

function showHistoric() {
    const historic = JSON.parse(localStorage.getItem('CardHistoric'));

    for(const card of historic) {
        const table = document.createElement('tr')
        const image = document.createElement('img');
        image.setAttribute('src', card.imageCard);
        const number = document.createTextNode(card.numberCard);
        const name = document.createTextNode(card.nameCard);

        const columnImage = document.createElement('td');
        const columnNumber = document.createElement('td');
        const columnName = document.createElement('td');

        columnImage.appendChild(image);
        columnNumber.appendChild(number);
        columnName.appendChild(name);

        table.appendChild(columnImage);
        table.appendChild(columnNumber);
        table.appendChild(columnName);

        tableHistoric.appendChild(table);
    }
}

showHistoric();