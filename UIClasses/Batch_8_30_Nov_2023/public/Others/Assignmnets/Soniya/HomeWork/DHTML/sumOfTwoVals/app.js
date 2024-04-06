var sum = () =>
        {
            var a1 =  parseInt(document.getElementById("fVal").value);
            var a2 =  parseInt(document.getElementById("sVal").value);
            var sol = a1 + a2;
            document.getElementById("resultVal").innerText = sol;
            document.getElementById("resultState").style.display= "block";
        }