class StudentDetails{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.marks = obj.marks;
    }
    getTotalAvg(){
        this.total = 0
        for( var i=0; i < this.marks.length; i++)
        {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    }
    getGrade(){
        
            if (this.avg >= 40) {
                this.grade = 'Passed';
            } else {
                this.grade = 'U have a surprise';
            }
    }
    displayPorgressCard() {
        this.getTotalAvg();
        // document.querySelector("#d_name").innerText = this.name;
        $("#d_name").text(this.name);
        $("#d_age").text(this.age);
        $("#d_total").text(this.total);
        $("#d_avg").text(this.avg);
        $("#d_grade").text(this.grade);
        // document.querySelector(".progressCard").style.display = 'block';
        // $(".progressCard").show(5000);
        $(".progressCard").slideDown(2000);
    }

}

var studentDetailsList = [];

var readInfo = () => {
    var studentData = {};
    // this.name = document.querySelector("#uname").value;
    studentData.name = $("#name").val();
    studentData.age = $("#age").val();
    studentData.marks = [];
    for (var i = 1 ; i <= 5; i++) {
        var id = '#m' + i;
        studentData.marks.push(parseInt($(id).val()))
    }
    var s1 = new StudentDetails(studentData);
   
    s1.displayPorgressCard();

    studentDetailsList.push(s1);

    
    
    
}
var showList = () => {
    console.log(studentDetailsList);
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
   