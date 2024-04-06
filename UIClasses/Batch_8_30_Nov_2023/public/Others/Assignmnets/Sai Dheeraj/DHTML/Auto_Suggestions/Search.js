var IceCreams = [ "Almond Joy",
            "Apple Pie Ice Cream",
            "Amaretto Ice Cream",
            "Avocado Ice Cream",
            "Apricot Ice Cream",
            "Acai Berry",
            "Asparagus",
            "Baci Ice Cream",
            "Balsamic",
            "Banana",
            "Barbeque",
            "Basil",
            "Berry",
            "Bittersweet Chocolate",
            "Black Pepper",
            "Blackberry",
            "Blue Cheese",
            "Blueberry",
            "Bourbon",
            "Boysenberry",
            "Brown Bread",
            "Brown Sugar",
            "Buttered Popcorn",
            "Butterscotch",
            "Candy Corn IceCream",
            "Cannoli",
            "Cantaloupe",
            "Caramel IceCream",
            "Cardamom",
            "Cheese IceCream",
            "Cherry",
            "Cherry Cordial",
            "Cinnamon",
            "Coca Cola (Coke)",
            "Coconut",
            "Coffee",
            "Cookies",
            "Cranberry IceCream",
            "Cucumber",
            "Custard IceCream",
            "Dark Chocolate IceCream",
            "Dried Apricot",
            "Durian",
            "Egg nog IceCream",
            "Espresso",
            "Ferrero Rocher IceCream",
            "Fig",
            "Garlic",
            "Gingerbread",
            "Grape IceCream",
            "Green Tea",
            "Guava",
            "Guiness",
            "Hazelnut",
            "Honey",
            "HoneyComb" ];

var ListIceCreams = () => {
        
        var inputwords = document.querySelector("#search").value;
        var listofWords = document.querySelector(".myList");
            if (inputwords == "") {
                listofWords.style.display = "none";
            } else {
                listofWords.style.display = "block"; 
            }     
        var Array = [];

        for(var i = 0; i < IceCreams.length; i++) {
            var words = IceCreams[i].toLowerCase();

            if (words.startsWith(inputwords.toLowerCase()) && words.includes(inputwords.toLowerCase())) {
                Array.push(words);
            }
        } 
        var values = document.getElementsByClassName("myList")[0]; 
            values.innerHTML = ""; 

            for(var i = 0; i < Array.length; i++) {
            var li = document.createElement("li");
                li.textContent = Array[i];
                values.appendChild(li);
        };
    };