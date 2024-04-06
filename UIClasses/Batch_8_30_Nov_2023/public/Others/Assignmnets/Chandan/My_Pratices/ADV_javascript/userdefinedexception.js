/*ar saveDetails = () => {

    
    var obj = {};
    obj.name = $("#uname").val();
    obj.age = $("#uage").val();
    if (!obj.name.trim()) {
        $(".nameerr").show();
        return;
    } else {
        $(".name_err").hide();
    }
    if (obj.age < 21) {
        $(".age_err").show();
        return;
    } else {
        $(".age_err").hide();
    }
    resetValues();

    $("#resultBlock").show();
    $("#resultBlock").text("Registered Successfly")
}*/

var saveDetails = () => {
    var obj = {};
    obj.name = $("#uname").val();
    obj.age = $("#uage").val();
    try {
        if (!obj.name.trim()) {  // name is empty
            // throws;
            throw 'NameERR';
        } else {
            $(".name_err").hide();
        }
        if (obj.age < 21) {
            // throws;
            throw 'AGEERR';
        } else {
            $(".age_err").hide();
        }
    } catch(err) {
        if (err == 'NameERR') {
            $(".name_err").show();
        } else if (err == 'AGEERR') {
            $(".age_err").show();
        }
        
    }
}

var resetValues = () => {
    $("#uname").val('');
    $("#uage").val('');
}