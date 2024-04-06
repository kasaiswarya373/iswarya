
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('loginModal');

    // Get the button that opens the modal
    var loginBtn = document.querySelector('.login-btn');

    // Get the <span> element that closes the modal
    var closeBtn = document.querySelector('.close');

    // When the user clicks on the login button, open the modal
    loginBtn.onclick = function() {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle login form submission
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your login logic here
        alert('Login Successful!');
        modal.style.display = 'none';
    });
});
