document.getElementById('Login-form').addEventListener('submit',function(event) {
    event.preventDefault(); // prevent default form submission


    var username = document.getElementById('username').Value;
    var password = document.getElementById('password').Value;
    var rememberMe = document.getElementById('rememberMe').checked;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');

        if (rememberMe) {
            localStorage.setItem('username', username);
        } else {
            localStorage.removeItem('username');
        }

    } else {
        alert('Invalid username or password. plz try again.');
    }

    var savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
});