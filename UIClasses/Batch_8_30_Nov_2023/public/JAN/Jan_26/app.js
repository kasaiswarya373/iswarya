var readInfo = () => {
    var studentData = {};
    // studentData.name = document.querySelector("#uname").value;
    studentData.name = $("#name").val();
    studentData.age = $("#age").val();
    studentData.marks = [];
    for (var i = 1 ; i <= 5; i++) {
        var id = '#m' + i;
        studentData.marks.push(parseInt($(id).val()))
    }

    studentData.getTotalAndAvg = () => {
        studentData.total = 0
        for (var i = 0 ; i < studentData.marks.length; i++) {
            studentData.total += studentData.marks[i]
        }
        studentData.avg = studentData.total / studentData.marks.length;
        studentData.getGrade();
    }
    
    studentData.getGrade = () => {
        if (studentData.avg >= 40) {
            studentData.grade = 'Passed';
        } else {
            studentData.grade = 'U have a surprise';
        }
    }

    studentData.displayPorgressCard = () => {
        studentData.getTotalAndAvg();
        // document.querySelector("#d_name").innerText = studentData.name;
        $("#d_name").text(studentData.name);
        $("#d_age").text(studentData.age);
        $("#d_total").text(studentData.total);
        $("#d_avg").text(studentData.avg);
        $("#d_grade").text(studentData.grade);
        // document.querySelector(".progressCard").style.display = 'block';
        // $(".progressCard").show(5000);
        $(".progressCard").slideDown(2000);
    }
    studentData.displayPorgressCard();
    
    console.log(studentData);
}

var resetFields = () => {
    $("#name").val('');
    $("#age").val('');
    for (var i = 1 ; i <= 5; i++) {
        var id = '#m' + i;
        $(id).val('');
    }
    $(".progressCard").slideUp(1000);
}
    