var studentDataInfo = [];

var SDetails = {
    readStudentData() {
        this.name = document.querySelector("#sname").value;
        if (this.name == '') {
            // show error
        }
        this.age = document.querySelector("#sage").value;
        SDetails.gender = document.querySelector("input[name=gender]:checked").value;
        this.class = document.querySelector("#studentClass").value;
        this.marks = [];
        
        for (var i = 1 ; i <= 5; i++ ) {
            var id = '#m' + i; 
            var value = parseInt(document.querySelector(id).value);
            this.marks.push(value);
        }
        this.getTotalAndAvg();
    },
    getGrade() {
        if (this.avg >= 40) {
            this.grade = 'Congrats';
        } else {
            this.grade = 'Your Father is Waiting....';
        }
        this.displayStudentDetails();
    },
    displayStudentDetails() {
        resetFields();

        document.querySelector("#displayBlock").style.display = 'block';

        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_avg").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;

        if (this.avg >= 40) {
            document.querySelector("#d_grade").setAttribute("class", 'passed');
        } else {
            document.querySelector("#d_grade").setAttribute("class", 'surprise');
        }
        studentDataInfo.push(JSON.parse(JSON.stringify(userData)));
        console.log(studentDataInfo);
    }
};

SDetails.getTotalAndAvg = () => {
    SDetails.total = 0;
    for (var i = 0 ; i < SDetails.marks.length; i++) {
        SDetails.total += SDetails.marks[i];
    }
    SDetails.avg = SDetails.total / SDetails.marks.length;
    SDetails.getGrade();
}

var generateProgressCard = () => {
    SDetails.readStudentData();
}

var resetFields = () => {
    document.querySelector("#sname").value = '';
    document.querySelector("#sage").value = '';
}