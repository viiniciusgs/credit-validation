const tableHistoric = document.querySelector('.tableHistoric');
const column = document.createElement('td');

function showHistoric() {
    const historic = JSON.parse(localStorage.getItem('CardHistoric'));

    for(const card of historic) {
        const table = document.createElement('tr')
        const image = document.createElement('img');
        image.setAttribute('src', card.imageCard);
        const name = document.createTextNode(card.nameCard);
        const number = document.createTextNode(card.numberCard);

        const columnImage = document.createElement('td');
        const columnName = document.createElement('td');
        const columnNumber = document.createElement('td');

        columnImage.appendChild(image);
        columnName.appendChild(name);
        columnNumber.appendChild(number);

        table.appendChild(columnImage);
        table.appendChild(columnName);
        table.appendChild(columnNumber);

        tableHistoric.appendChild(table);
    }
}

showHistoric();