document.addEventListener("DOMContentLoaded", function() {
    const formData = document.querySelector("#formData");
    const registeredList = document.querySelector("#registeredList");
    const refreshButton = document.querySelector("#refresh");

    formData.addEventListener("submit", function(e) {
        e.preventDefault(); 
        register();
    });

    refreshButton.addEventListener("click", function() {
        location.reload();
    });

    function register() {
        const name = document.querySelector("#name").value;
        const age = document.querySelector("#age").value;
        const gender = document.querySelector("input[name='gender']:checked").value;
        const className = document.querySelector("#class").value;

        let newArray = [name, age, gender , className];
            newArray.forEach((item) => {
                var li = document.createElement("li");
                var text = document.createTextNode(item);
                li.appendChild(text);
                registeredList.appendChild(li);
                
            });
        // const newRow = document.createElement("li");
        // newRow.innerHTML = `
        //     <li>${name}</li>
        //     <li>${age}</li>
        //     <li>${gender}</li>
        //     <li>${className}</li>
        // `;
        // registeredList.appendChild(newRow);

        formData.reset();
    }
});




