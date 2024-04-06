var images = {};
        var imagesrc;
        let dropEvent = (event) => {
            event.preventDefault();
            var divTag = document.createElement("div");
            var imgElement = document.createElement("img");
            imgElement.setAttribute("src", imagesrc);
            divTag.append(imgElement);

            if (!images[imagesrc]) {
                images[imagesrc] = 1;
            } else {
                images[imagesrc]++;
            }

            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", () => {
                divTag.remove();
                images[imagesrc]--;
                updateCounter();
            });
            divTag.appendChild(deleteButton);

            var counter = document.createElement("div");
            counter.className = "counter";
            counter.innerText = "Count: " + images[imagesrc];
            divTag.appendChild(counter);

            document.querySelector("#div1").append(divTag);
            updateCounter();
            console.log("drop event");
        }

        let updateCounter = () => {
            var counterElements = document.querySelectorAll(".counter");
            counterElements.forEach((element, index) => {
                var parentElement = element.parentElement;
                var src = parentElement.querySelector("img").getAttribute("src");
                element.innerText = "Count: " + images[src];
            });
        }


        let dragStartEvent = (event) => {
            console.log("drag start");
            imagesrc = event.target.getAttribute("src");
        }

        let dragOverEvent = (event) => {
            event.preventDefault();
            console.log("drag over");
        }