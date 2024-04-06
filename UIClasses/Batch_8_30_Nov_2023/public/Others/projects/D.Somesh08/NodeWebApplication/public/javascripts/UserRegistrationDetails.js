var registerNewUserSignUpDetailsIntoDb = () => {
    var userDetails = {};
    userDetails.userName = document.querySelector('.signUpEmailId').value;
    userDetails.password = document.querySelector('.signUpPass').value;

    axios.post('/signup/newUser', userDetails)
        .then((resp) => {
            console.log("user details save", resp.data);
        }).catch(err => console.log('error while saving user into db'));
}