var utilData = {
    showAlert: (message) => {
        document.querySelector('#alertMessageBlock').innerText = message;
        document.querySelector('#alertMessageBlock').style.display = 'inline-block';
        setTimeout(() => {
            document.querySelector('#alertMessageBlock').style.display = 'none';
        }, 5000);
    }
};