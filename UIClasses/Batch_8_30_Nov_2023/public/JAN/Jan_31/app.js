
var taskList = [
    "Do the code review of project",
    "Create new module for login app",
    "Create all JIRa tickets for App chagnes",
    "Upgrade the version of java and node to latest",
    "Create CR or new release for this month"
];

var userName = '';
var saveUserName = () => {
    userName = $("#username").val();
    $("#username").val('');
}

var createTaskContainer = () => {
    // var divTag = document.createElement("div");
    var divTag = $("<div/>");
    divTag.attr("id", 'taskContainer');
    $(".mainContainer").html('');
    $(".mainContainer").append(divTag);
}

var showTaskForToday = () => {
    var randomIndex = Math.floor(Math.random() * taskList.length);
    try {
        var task = taskList[randomIndex];
        document.querySelector("#taskContainer").innerText = task;
    } catch(e) {
        console.log(e)
        alert("error while finding the task block, please crete and try again")
    } finally {
        setTimeout(() => {
            showThanksMsg();
        }, 3000); 
    }

    
}

var showThanksMsg = () => {
    var msg = `Thanks for using our page MR. ${userName}`;
    $(".thanksBlock").text(msg)
    $(".thanksBlock").show(2000);
}