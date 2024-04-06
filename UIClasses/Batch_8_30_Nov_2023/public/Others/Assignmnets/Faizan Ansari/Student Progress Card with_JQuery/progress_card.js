var studentDetails = {

    readStudentDetails() {
        // studentDetails.name = document.querySelector("#sname").value;

        studentDetails.name = $("#sname").val();
        studentDetails.age = $("#sage").val();
        studentDetails.gender = $("input[name=gender]:checked").val();
        studentDetails.class = $("#sclass").val();
        studentDetails.marks = [];
    
        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i + 1);
            studentDetails.marks[i] = parseInt($(id).val());
        }
        this.getTotalAndAvg();
        this.dispalyStudentDetails();
    },
    
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    },
    getGrade() {
        this.grade = '';
        if (this.avg >= 40) {
            this.grade = 'You passed';
        } else {
            this.grade = 'Surprise';
        }
    },

    dispalyStudentDetails() {
        // document.querySelector("#dname").innerHTML = this.name

        $("#dname").text(this.name);
        $("#dage").text(this.age);
        $("#dgender").text(this.gender);
        $("#dclass").text(this.class);
        $("#dtotal").text(this.total);
        $("#davg").text(this.avg);
        $("#dgrade").text(this.grade);

        // document.querySelector(".dispalyDetailsBlock").style.display = 'block';
        // $(".dispalyDetailsBlock").show(5000);
        $(".dispalyDetailsBlock").slideDown(2000);

    }

};

var readStudentData = () => {
    studentDetails.readStudentDetails(); 
    console.log(studentDetails);    
} 

var resetFields = () => {
    $("#sname").val('');
    $("#sage").val('');
    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i + 1);
        $(id).val('');
    }
 
    document.querySelector("input[name=gender]").value = 'Male';  // Not Working

    $("#sclass").val('unselected');

    // $(".dispalyDetailsBlock").style.display = 'none';
    $(".dispalyDetailsBlock").slideUp(1000);

    
}

