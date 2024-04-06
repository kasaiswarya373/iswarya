
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array; 
} 

/*let array = [];

var number = () => {
    var button  = "";
    for (let i = 1; i<=100; i++){
        const numberElement = document.createElement("div");
        numberElement.setAttribute("id", 'coin_' + i)
        numberElement.textContent = i;
        numberElement.classList.add("number");
        numberContainer.appendChild(numberElement);
    }
} */


function start() {
    var value = Math.floor(Math.random() * 90 + 1);
    for (var i = 0; i < block.length; i++) {
        if (value == array[i]) {
            value = Math.floor(Math.random() * 90 + 1);
            i = 0;
        }
        console.log(value);
    }
}
        if (remainingNumbers.length === 0){
            gameOver();
        return;
    }
   /* const index = Math.floor(Math.random()* remainingNumbers.length);
    const number = remainingNumbers[index];
    remainingNumbers.splice(index,1);
    const numberElement = document.createElement("div");
    numberElement.textContent = number;
    numberElement.classList.add("number");
    numberContainer.appendChild(numberElement);*/
    
   /* let randomNumber;
    do {
        randomNumber = Math.floor(Math.random()*90) + 1;
    } while (pickedNumbers.includes(randomNumber));

    pickedNumbers.push(randomNumber);

    const pickedNumberElement = document.createElement("div");
    pickedNumberElement.setAttribute("id", 'coin_' + randomNumber)
    pickedNumberElement.textContent = randomNumber;
    pickedNumberElement.classList.add("picked-number");
    pickedNumberContainer.appendChild(pickedNumberElement);
   
} */

function gameOver() {
    startButton.disabled = true;
    startButton.textContent = "Game Over";
    alert("game over");
    gameOver();
}
const pickedNumbers =  [];
let remainingNumbers = Array.from({length: 100}, (_,i) => i + 1);

shuffleArray(remainingNumbers);


const startButton = document.getElementById("startButton");
const pickedNumberContainer = document.getElementById("pickedNumberContainer");

 /*for (let i = 1; i<=100; i++){
    const numberElement = document.createElement("div");
    numberElement.setAttribute("id", 'coin_' + i)
    numberElement.textContent = i;
    numberElement.classList.add("number");
    numberContainer.appendChild(numberElement);
} */



startButton.addEventListener("click", start);