var validData = (event) => {
    console.log(event);
    var stdname = document.querySelector("#Sname").value;
    stdname = stdname.trim();
    if((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90)){
        return true;
    } else {
        return false;
    }
}
var validNum = (event) => {
    console.log(event);
    var age = document.querySelector("#age").value;
    age = age.trim();
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    } else {
        return false;
    }
}
var validValue = (event) => {
    for(var i = 1; i <= 6; i++){
        var id = '#m' + i; 
        var stdValue = document.querySelector(id).value;
        stdValue = stdValue.trim();
        if(event.keyCode >= 48 && event.keyCode <= 57){
            return true;
        }
        else{
            return false;
        }
    }
}    
var studentDetails = {
    readData() {
        this.name = document.querySelector("#Sname").value;
        if(this.name ==''){
            document.querySelector("#error1").style.display = 'block';
        } else {
            document.querySelector("#error1").style.display = 'none';
        }
        this.age = document.querySelector("#age").value;
        if(this.age ==''){
            document.querySelector("#error2").style.display = 'block';
        } else {
            document.querySelector("#error2").style.display = 'none';
        }
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.class = document.querySelector("#standard").value;
        this.marks = [];
        for (var i = 1 ; i <= 6; i++ ) {
            var id = '#m' + i; //
            var value = parseInt(document.querySelector(id).value);
            this.marks.push(value);
        }
        this.getTotalAndAvg();
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
        if (this.avg >= 40) {
            this.grade = 'Passed';
        } else {
            this.grade = 'Failed';
        }
        this.displayStdDetails();
    },
    displayStdDetails() {  
        document.querySelector("#displayBlock").style.display = 'block';
        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_avg").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;
        document.querySelector("#displayBlock").style.display = "block";
        if (this.avg >= 40) {
            document.querySelector("#d_grade").setAttribute("class", 'Passed');
        } else {
            document.querySelector("#d_grade").setAttribute("class", 'Failed');
        }  
    }
}
var DisplayData = (event) => {
    studentDetails.readData(event);
}
var reset = () => {
    document.querySelector("#Sname").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("#standard").value = '';
    for(var i = 1; i <= 6; i++){
        var id = '#m' + i;
        document.querySelector(id).value = '';
    }
}