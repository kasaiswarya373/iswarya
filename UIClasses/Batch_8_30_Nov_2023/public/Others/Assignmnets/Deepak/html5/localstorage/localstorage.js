$(()=>{
        var username = localStorage.getItem('username')
        var password = localStorage.getItem('password')
        $("#u_name").val(username);
        $("#u_pass").val(password)
        if(localStorage.getItem('username')){
            $('#reDetail').show()
        }else{
            $('#reDetail').hide()
        }

    $('#btn').on('click',(event)=>{
        if($('#u_name').val()=="" && $('#u_pass').val()== ""){
            $("#msg").text("Username and password can't be empty")
            event.preventDefault();
            return;  
        }else if($('#u_name').val().trim().length < 5 && $('#u_pass').val().trim().length < 5){
            $("#msg").text("Username and password must be more than 5 letter")
            event.preventDefault();
            return; 
        }else{
            $("#msg").text('');
        }
        if($("#remDetail").is(':checked')){
            if(username == null && password == null){
                localStorage.setItem("username",$("#u_name").val());
                localStorage.setItem("password",$("#u_pass").val());
                $("#remDetail").prop('checked',false);
            }else{
                if(username ==  $("#u_name").val() && password == $("#u_pass").val()){
                    $("#msg").text("User is already have a account");
                    $("#remDetail").prop('checked',false);  
                }else if(username ==  $("#u_name").val() && password != $("#u_pass").val()){
                    $("#msg").text("Username and password not matching"); 
                }else if(username !=  $("#u_name").val()){
                    localStorage.setItem("username",$("#u_name").val());
                    localStorage.setItem("password",$("#u_pass").val());
                    $("#remDetail").prop('checked',false);
                }
            }
        }
        $("#u_name").val('')
        $("#u_pass").val('')
        if($("#u_name").val().trim() ==""){
            $('#reDetail').hide()   
        }
    })
    $("#u_name").on('keyup',()=>{
        $("#msg").text(" ");  
        if( $("#u_name").val().trim() == username){
            $('#reDetail').show()  
        }else{
            $('#reDetail').hide()  
        }
    })
})