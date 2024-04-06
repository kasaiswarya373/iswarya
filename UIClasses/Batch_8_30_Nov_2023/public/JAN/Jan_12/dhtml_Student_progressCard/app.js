var readDate = () => {
    var userData = {};
    userData.name = document.querySelector("#sname").value;
    if (userData.name == '') {
        // show error
    }
    userData.age = document.querySelector("#sage").value;
    userData.gender = document.querySelector("input[name=gender]:checked").value;
    userData.class = document.querySelector("#studentClass").value;
    userData.marks = [];
    
    for (var i = 1 ; i <= 5; i++ ) {
        var id = '#m' + i; //
        var value = parseInt(document.querySelector(id).value);
        userData.marks.push(value);
    }




    console.log(userData);

}