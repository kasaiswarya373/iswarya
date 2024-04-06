var saveDetails = () => {
    
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
}

var resetValues = () => {
    $("#uname").val('');
    $("#uage").val('');
}