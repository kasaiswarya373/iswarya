var userDetails = {}; 
 newUserSignUp = () =>{
    userDetails.username = $('#userid').val();
    userDetails.password = $('#pwd').val();
    userDetails.emailid = $('#emialid').val();
 

    axios.post('/get/signup/details',userDetails).then((response) =>{
        console.log(response);
        if(response.data.status == 'Success'){
        $('.msgblock').show(); 
        $('.msgblock').text('Registerd successfully');  
        $('#userid').val('');
        $('#pwd').val('');
        $('#confirmpwd').val('');
        $('#emialid').val('');
    }else{
        $('.msgblock').show(); 
        $('.msgblock').text('User with same account already exists');  
    }
    }).catch((err) =>{
        console.log(err);

    })
console.log(userDetails);
}
