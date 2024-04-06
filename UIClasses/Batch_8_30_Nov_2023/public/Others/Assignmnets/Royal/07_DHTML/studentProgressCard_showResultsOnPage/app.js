var studentDetailsList = [];

var userData = {                  //Inside userData object also we can use method, or seprately also we can use shown in L#25
    readStudentData(){

        this.name = document.querySelector("#sName").value;
        userData.age = document.querySelector("#sAge").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;      //this is for input element with "name" selector
        userData.class = document.querySelector("#studentClass").value;
        userData.class = document.querySelector("#studentClass").value;
        
        this.marks = [];
        
        for (var i = 1; i <= 5; i++){
            var id = '#m' + i;
            var value = parseInt(document.querySelector(id).value);
            this.marks.push(value);
        }

        this.getTotalAndAvg();
    },

    getGrade(){
        if(this.avg >= 40){
            this.grade = "Congratulations... You're pass  ): ";
        } else{
            this.grade ="Opps... You're surprised :(   ";
        }
        this.dispalyStudentDetails();

        
    },

    dispalyStudentDetails(){
        document.querySelector("#displayBlock").style.display = 'block';

        document.querySelector("#d_name").innerText= this.name;
        document.querySelector("#d_age").innerText= this.age;
        document.querySelector("#d_gender").innerText= this.gender;
        document.querySelector("#d_total").innerText= this.total;
        document.querySelector("#d_avg").innerText= this.avg;
        document.querySelector("#d_grade").innerText= this.grade;


        if (this.avg >= 40){
            document.querySelector("#d_grade").setAttribute('class', 'passed');
        } else{
            document.querySelector("#d_grade").setAttribute('class', 'surprise');
        }

        studentDetailsList.push(JSON.parse(JSON.stringify(userData)));      //storing data in array & deep & shallow copy conecpt
        console.log(studentDetailsList);        //printing stored data
    }
};

userData.getTotalAndAvg = () => {
    userData.total = 0;
    for (var i = 0; i < userData.marks.length; i++){
        userData.total += userData.marks[i];
    }
    userData.avg = userData.total / userData.marks.length;

    // console.log(this.userData);
    userData.getGrade();
}

var generateProgressCard = () => {
    userData.readStudentData();
}
var resetFields = () => {
    this.name = document.querySelector("#sName").value = '';
        userData.age = document.querySelector("#sAge").value = '';
        this.gender = document.querySelector("input[name=gender]:checked").value = '';
        userData.class = document.querySelector("#studentClass").value = '';
        userData.class = document.querySelector("#studentClass").value = '';
        userData.class = document.querySelector("#m1").value = '';
        userData.class = document.querySelector("#m2").value = '';
        userData.class = document.querySelector("#m3").value = '';
        userData.class = document.querySelector("#m4").value = '';
        userData.class = document.querySelector("#m5").value = '';
}