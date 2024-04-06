
var rpsimages = ['https://e7.pngegg.com/pngimages/422/99/png-clipart-rock-paper-scissors-computer-icons-scissors-game-white-thumbnail.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoiKcfY-34iOgPjRejIMP9oPoNSVWvKiKHg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29KZwnUpVaYl24zwCqOmy172OsxngwcB0vA&usqp=CAU']
var displayGame = () => {
    document.querySelector("#startbutton").style.display = 'none';
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class","maindiv");

    var sdiv = document.createElement("div");
    sdiv.setAttribute("class","subdiv");
    maindiv.append(sdiv);

    var div1 = document.createElement("div");
    div1.setAttribute("class","container1");
    sdiv.append(div1);
    var i1 = document.createElement("input");
    i1.setAttribute("type","button");
    i1.setAttribute("id","button1");
    i1.value = 'PLAY';
    i1.onclick = () =>{
        displayImage('.container1');
        setTimeout(() => {
            displayImage('.container2');
        }, 2000);
    }
    sdiv.append(i1);
    var s1 = document.createElement("span");
    s1.setAttribute("class","s1");
    s1.innerText = 'PLAYER-1';
    sdiv.append(s1);

    var div2 = document.createElement("div");
    div2.setAttribute("class","container2");
    sdiv.append(div2);
    setTimeout(() => {
        displayImage('.container2');
    }, 2000);
    var s2 = document.createElement("span");
    s2.setAttribute("class","s2");
    s2.innerText = 'PLAYER-2';
    sdiv.append(s2);

    var resultsdiv = document.createElement("div");
    resultsdiv.setAttribute("class","resultsBox");
    maindiv.append(resultsdiv);
    maindiv.append(sdiv);

    document.querySelector(".displaysGame").append(maindiv);
}
var displayImage = (containerSelector) => {
    var imageIndex = Math.floor(Math.random() * 3);
    var imgElement = document.createElement("img");
    imgElement.setAttribute("class","img")
    imgElement.src = rpsimages[imageIndex];
    imgElement.alt = "Player's Image";
    document.querySelector(containerSelector).innerHTML = '';
    document.querySelector(containerSelector).appendChild(imgElement);
    checkWinner();
}
var checkWinner = () => {
    var container1Index = rpsimages.indexOf(document.querySelector('.container1 img').src);
    var container2Index = rpsimages.indexOf(document.querySelector('.container2 img').src);

    var resultsdiv = document.querySelector('.resultsBox');
    if (!resultsdiv) {
        console.error("Results div not found!");
        return;
    }

    if (container1Index === container2Index) {
        resultsdiv.innerText = "It's a tie!";
    } else if (
        (container1Index === 0 && container2Index === 2) ||
        (container1Index === 1 && container2Index === 0) ||
        (container1Index === 2 && container2Index === 1)
    ) {
        resultsdiv.innerText = "Player-1 wins!";
    } else {
        resultsdiv.innerText = "Player-2 wins!";
    }

    // Show the results div
    resultsdiv.style.display = 'block';
}