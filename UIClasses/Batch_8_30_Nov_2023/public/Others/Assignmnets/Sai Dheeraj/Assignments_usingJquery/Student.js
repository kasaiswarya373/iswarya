    var ReadStudentdetails = () => {

        var StudentInfo = {};
                StudentInfo.name = $("#sname").val();
                StudentInfo.age = $("#sage").val();
                StudentInfo.gender = $("input[name=gender]:checked").val();
                StudentInfo.class = $("#Sclass").val();
                StudentInfo.marks = [];

                for(var n = 1; n <= 5; n++){
                var id = '#m' + n;
                StudentInfo.marks.push(parseInt($(id).val()));
    };
        StudentInfo.getTotalandAvg = () => {
                StudentInfo.total = 0;
                for(var n = 0; n < StudentInfo.marks.length; n++){
                    StudentInfo.total += StudentInfo.marks[n]
            }

        StudentInfo.avg = StudentInfo.total / StudentInfo.marks.length;

            StudentInfo.getGrade();
        };

        StudentInfo.getGrade = () => {
            if (StudentInfo.avg >= 50){
                StudentInfo.grade = 'Passed';
            } else {
                StudentInfo.grade = 'Your father is waiting ....';
        };
    };

        StudentInfo.displayStudentResult = () => {
            resetfields();
            StudentInfo.getTotalandAvg();

            $("#d_name").text(StudentInfo.name);
            $("#d_age").text(StudentInfo.age);
            $("#d_class").text(StudentInfo.class);
            $("#d_total").text(StudentInfo.total);
            $("#d_avg").text(StudentInfo.avg);
            $("#d_grade").text(StudentInfo.grade);
            
            $(".StudentResult").show(5000);
        
    }
        StudentInfo.displayStudentResult();
            console.log(StudentInfo);
    }

        var resetfields = () => {
                $("#sname").val('');
                $("#sage").val('');
                for(var n = 1; n <= 5; n++){
                    var id = '#m' + n;
                    $(id).val('');
        }
    };