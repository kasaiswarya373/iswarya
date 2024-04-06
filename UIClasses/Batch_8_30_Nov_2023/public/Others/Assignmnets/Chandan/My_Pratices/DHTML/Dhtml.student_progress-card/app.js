var userdata = {
    readstudentdata() {
        this.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#sage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        userdata.class = document.querySelector("#studentclass").value;
        userdata.marks = [];
    
        for (var i = 1 ; i <= 5;i++){
            var id = '#m' + i; //
            var value = parseInt(document.querySelector(id).value);
            userdata.marks.push(value);
        }
        this.getTotalandAvg();
    },
    getGrade() {
        if (this.avg >= 40) {
            this.grade = 'you got passed';
        } else {
            this.grade = 'surprise..';
        }
        this.document.querySelector();
    },
    displaystudentdetails() {

        document.querySelector("#displayBlock").Style.display = 'block';

        
        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_avg").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;


        if (this.avg >=40) {
            document.querySelector("#d_grade").setAttribute("class",'passed');
        } else {
            document.querySelector("#d_grade").setAttribute("class", 'surprise');
        }



    }
     
    
};



var getTotalandAvg = () => {
    userdata.total = 0;
    for (var i = 0 ; i < userdata.marks.length; i++ ) {
        userdata.total += userdata.marks[i];
    }
    userdata.avg = userdata.total / userdata.marks.length;
    userdata.getGrade();
}
var generateprogresscard = () => {
    userdata.readstudentdata();

}