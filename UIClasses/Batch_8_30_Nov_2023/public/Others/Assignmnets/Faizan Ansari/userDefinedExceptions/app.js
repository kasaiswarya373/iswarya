var saveDetails = () => {
    var obj = {};
    obj.name = $("#uname").val();
    obj.age = $("#uage").val();

    /*
    if(!obj.name.trim()){
        $(".name_err").show();
        return;
    }else{
        $(".name_err").hide();
    }

    if(obj.age < 21){
        $(".age_err").show();
        return;
    }else{
        $(".age_err").hide();
    }
    */

    try{
        if(!obj.name.trim()){  // name is empty
            // throws; // invoke all the instruction of catch block
            throw 'nameERR';
        } else {
            $(".name_err").hide();
        }

        if(obj.age < 21){
            // throws;
            throw 'ageERR';
        } else {
            $(".age_err").hide();
        }
    }catch(error){
        if(error == 'nameERR'){
            $(".name_err").show();
        }
        if(error == 'ageERR'){
            $(".age_err").show();
        }

    }


    // resetValues();

    // $("#resultBlock").show();
    // $("#resultBlock").text("Registered Successfully");
}

var resetValues = () => {
    $("#uname").val('');
    $("#uage").val('');
}


//  doubts --> line no 7 and 14 = name_err, age_err no class is there for it so how properties are changing