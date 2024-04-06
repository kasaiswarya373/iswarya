var countries = [];

    var firstCharCheck = () =>
    {
        var input = document.querySelector("#search").value;
        var list = document.querySelector(".myList");
        if (input == "") {
        list.style.display = "none";
         } else 
         {
        list.style.display = "block"; 
         }     
        var firstCharArray = [];
        for(var i = 0;i < countries.length;i++)
        {
            var country = countries[i].toLowerCase();
            if (country.startsWith(input.toLowerCase()) && country.includes(input.toLowerCase()))
            {
               firstCharArray.push(country);
            }

        } 
        var ultag = document.getElementsByClassName("myList")[0]; 
        ultag.innerHTML = ""; 
        for(var j = 0;j < firstCharArray.length;j++)
        {
            var li = document.createElement("li");
            li.textContent = firstCharArray[j];
            ultag.appendChild(li);
        }
    }

    axios.get("http://localhost:8082/get/countriesList")
        .then((response)=>
        {
            countries = response.data.countries;
        }).catch((err) =>
        {
            console.log(err);
        });


    