    readvalues = () => {
        var A1 = document.querySelector("#fstvalue").value;
        A1 = parseInt(A1);
        var A2 = document.querySelector("#secvalue").value;
        A2 = parseInt(A2);

        var result = A1 + A2;
        document.querySelector("#finalvalue").innerText = result;

        document.querySelector("#Resultbox").style.display = 'block';
       
        resetvalues();
    }

    var resetvalues = () => {
        document.querySelector('#fstvalue').value = '';
        document.querySelector('#secvalue').value = '';    
}
