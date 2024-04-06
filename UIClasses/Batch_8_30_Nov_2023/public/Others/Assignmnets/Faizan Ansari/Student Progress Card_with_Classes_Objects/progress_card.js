class StudentInfo {
    constructor(sdata){
        this.name = sdata.name;
        this.age = sdata.age;
        this.gender = sdata.gender;
        this.class = sdata.class;
        this.marks = sdata.marks;
    }

    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }

    getGrade() {
        this.grade = '';
        if (this.avg >= 40) {
            this.grade = 'You passed';
        } else {
            this.grade = 'Surprise';
        }
    }

    dispalyStudentDetails() {
        this.getTotalAndAvg();
        this.getGrade();

       $("#dname").text(this.name);
       $("#dage").text(this.age);
       $("#dgender").text(this.gender);
       $("#dclass").text(this.class);
       $("#dtotal").text(this.total);
       $("#davg").text(this.avg);
       $("#dgrade").text(this.grade); 

       // document.querySelector(".dispalyDetailsBlock").style.display = 'block';

       $(".dispalyDetailsBlock").show(1000);

    }
}

var studentDetailList = [];
var readStudentData = () => {

    var studentDetails = {}
        studentDetails.name = $("#sname").val();
        studentDetails.age = $("#sage").val();
        studentDetails.gender = $("input[name=gender]:checked").val();
        studentDetails.class = $("#sclass").val();
        studentDetails.marks = [];
        
        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i + 1);
            studentDetails.marks[i] = parseInt($(id).val());
        }

        var s1 = new StudentInfo(studentDetails);
        s1.dispalyStudentDetails();

        studentDetailList.push(s1);
        console.log(studentDetailList);
    }
     
var resetFields = () => {
   $("#sname").val('');
   $("#sage").val('');
    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i + 1);
       $(id).val('');
    }
 
   $("#sclass").val('unselected');

    //  document.querySelector(".dispalyDetailsBlock").style.display = 'none';

    $(".dispalyDetailsBlock").hide(1000);
}


