
    // adding rows

    function addrow () {
        var table = document.getElementById("display");
         var newrow = table.insertRow(table.length);
         Cell1 = newrow.insertCell(0);
         Cell2 = newrow.insertCell(1);
         Cell3 = newrow.insertCell(2);
         Cell4 = newrow.insertCell(3);
         Cell5 = newrow.insertCell(4);


        
       var name = document.getElementById("ename").value;
       var age = document.getElementById("eage").value;
       var gender = document.querySelector("input[name = gender]:checked").value;
       var dept = document.querySelector("#edept").value;
       var country = document.querySelector("#ecountry").value;


       Cell1.innerHTML = name;
       Cell2.innerHTML = age;
       Cell3.innerText = gender;
       Cell4.innerText = dept;
       Cell5.innerText = country;

    }