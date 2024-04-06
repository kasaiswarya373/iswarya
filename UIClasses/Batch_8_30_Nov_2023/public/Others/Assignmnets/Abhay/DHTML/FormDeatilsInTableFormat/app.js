 var form = document.querySelector("#formDetails");
        var data = document.querySelector("#displayData");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submit();
        });

        const submit = () => {
            let name = document.querySelector("#myName").value;
            let age = document.querySelector("#myAge").value;
            let state = document.querySelector("#myState").value;

            let newArray = [name, age, state];
            newArray.forEach((item) => {
                var li = document.createElement("li");
                var text = document.createTextNode(item);
                li.appendChild(text);
                data.appendChild(li);
            });
            form.reset();
        }
        var reloadPage = () => {
            location.reload();
        }