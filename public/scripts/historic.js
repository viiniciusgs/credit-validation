const tableHistoric = document.querySelector('.tableHistoric');
let historic = JSON.parse(localStorage.getItem('searchHistory'));

function showHistoric() {
    tableHistoric.innerHTML = '';
    const apagarTodos = document.createElement('a');
    apagarTodos.setAttribute('href', '#');
    const deleteHistoricTodos = document.createElement('img');
    deleteHistoricTodos.setAttribute('src', '../public/images/excluir.svg');
    apagarTodos.setAttribute('onclick', 'deleteTodoHistorico()');

    apagarTodos.appendChild(deleteHistoricTodos);
    tableHistoric.appendChild(apagarTodos);
    
    for(const card of historic) {
        const table = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('src', card.imageCard);
        const nameText = document.createElement('h1');
        const numberText = document.createElement('h2');
        const name = document.createTextNode(card.nameCard);
        const number = document.createTextNode(card.numberCard);

        nameText.appendChild(name);
        numberText.appendChild(number);

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = historic.indexOf(card);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        const deleteHistoric = document.createElement('img');
        deleteHistoric.setAttribute('src', '../public/images/excluir.svg');

        linkElement.appendChild(deleteHistoric);

        table.appendChild(image);
        table.appendChild(nameText);
        table.appendChild(numberText);
        table.appendChild(linkElement);

        tableHistoric.appendChild(table);
    }
}

showHistoric();

function deleteTodo(pos) {
    historic.splice(pos, 1);
    showHistoric();
    saveToStorage();
}

function deleteTodoHistorico() {
    historic = [];
    showHistoric();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('searchHistory', JSON.stringify(historic));
}