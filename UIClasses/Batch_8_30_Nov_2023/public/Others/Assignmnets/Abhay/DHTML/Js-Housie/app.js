for (var i = 1; i <= 90; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "number");
            div.setAttribute("id", i);
            div.innerText = i;
            document.querySelector(".container").append(div);
        }
        var generatedNumber = [];
        var getRandomNumber = () => {
            var maxRange = 90;
            do {
                var randomNumber = Math.round(Math.random() * maxRange);
            } while (generatedNumber.includes(randomNumber));

            generatedNumber.push(randomNumber)
            document.querySelector(".displayNumber").innerText = randomNumber;
            var highlighted = document.getElementById(randomNumber);
            highlighted.style.backgroundColor = "greenyellow";
            if (generatedNumber.length == 90) {
                alert("Game is Finished!");
            }
        }