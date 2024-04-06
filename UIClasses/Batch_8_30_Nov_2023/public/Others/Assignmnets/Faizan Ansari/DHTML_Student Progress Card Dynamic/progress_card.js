var studentDetails = {
    // json object

    readStudentDetails() {
        studentDetails.name = document.querySelector("#sname").value;
        studentDetails.age = document.querySelector("#sage").value;
        studentDetails.gender = document.querySelector("input[name=gender]:checked").value;
        studentDetails.class = document.querySelector("#sclass").value;
        studentDetails.marks = [];
    
        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i + 1);
            studentDetails.marks[i] = parseInt(document.querySelector(id).value);
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
        /*
        console.log("Name is " + this.name);
        console.log("Age is " + this.age);
        console.log("Gender is " + this.gender);
        console.log("Total is " + this.total);
        console.log("Class is " + this.class);
        console.log("Avg is " + this.avg);
        console.log("Grade is " + this.grade);
        */

        document.querySelector("#dname").innerHTML = this.name
        document.querySelector("#dage").innerHTML = this.age
        document.querySelector("#dgender").innerHTML = this.gender
        document.querySelector("#dclass").innerHTML = this.class
        document.querySelector("#dtotal").innerHTML = this.total
        document.querySelector("#davg").innerHTML = this.avg
        document.querySelector("#dgrade").innerHTML = this.grade

        document.querySelector(".dispalyDetailsBlock").style.display = 'block';

    }

};

var readStudentData = () => {
    studentDetails.readStudentDetails(); 
    console.log(studentDetails);    
} 

var resetFields = () => {
    document.querySelector("#sname").value = '';
    document.querySelector("#sage").value = '';
    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i + 1);
        document.querySelector(id).value = '';
    }
 
    document.querySelector("input[name=gender]").value = 'Male';  // Not Working    
    document.querySelector("#sclass").value = 'unselected';

    document.querySelector(".dispalyDetailsBlock").style.display = 'none';
}

