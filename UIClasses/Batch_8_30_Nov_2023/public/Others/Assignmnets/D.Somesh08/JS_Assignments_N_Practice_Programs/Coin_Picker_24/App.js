
let createBlocks = () => {
    let colNo = 0;
    for (let i = 1; i <= 10; i++) {

        let rowDiv = document.createElement('div');

        rowDiv.setAttribute('class', 'rowDiv');
        rowDiv.setAttribute('id', i);

        for (let j = colNo; j < (colNo + 10); j++) {
            let columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'columnDiv');
            columnDiv.setAttribute('id', j);
            columnDiv.setAttribute('data-index', j);
            columnDiv.innerText = j;

            rowDiv.append(columnDiv);
            document.querySelector('.container').append(rowDiv);
        } colNo += 10;
    }
}
let randomNos = [];

let generateRandomNo = () => {

    checkWhetherGameOver();

    let randomNo = Math.floor(Math.random() * 100);

    document.querySelector('#showNo').innerText=randomNo;

    if (!randomNos.includes(randomNo)) {

        randomNos.push(randomNo);
        let targetElement = document.querySelector('.columnDiv[data-index="' + randomNo + '"]');

        targetElement.style.backgroundColor = 'purple';
    } else {
        console.log(randomNo + "already selected!!!");
        return;
    }


}

let checkWhetherGameOver = function () {
    if (randomNos.length >= 100) {
        alert('game over!!!!!')
        document.querySelector('#showNo').style.display = 'none';
        document.querySelector('#tapBtn').style.display = 'none';
        document.querySelector('#completed').style.display = 'inline';
    }
}



