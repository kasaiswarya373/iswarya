
var sData = {

    readStudentData(event){
   
        this.name = document.querySelector("#sname").value;

        this.name = this.name.trim('');
        if(sData.name == ''){
            document.querySelector("#nameErr").style.display = 'block';
        }else{
            document.querySelector("#nameErr").style.display = 'none';
        }

        sData.age = document.querySelector("#sage").value;

        if(sData.age == ''){
            document.querySelector("#ageErr").style.display = 'block';
        }else{
            document.querySelector("#ageErr").style.display = 'none';
        }

        sData.gender = document.querySelector("input[name=gender]:checked").value;
        
        this.class = document.querySelector("#class").value;
        
        sData.marks = [];

       for (var i = 1; i <= 5 ;i++ ){
        var id = '#m' + i;
        var value = parseInt(document.querySelector(id).value);
        sData.marks.push(value);
                          
       }
       sData.getTotalAndAvg();
     
},
    getGrade() {
    if(this.avg >= 35){
        sData.grade = "Passed";
    }else{
        this.grade = "Failed";
    }
    this.displayDetails();
},
    displayDetails() {

        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_average").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;
              
        if(this.avg >= 35)
        {
            document.querySelector("#d_grade").setAttribute("class",'passed');
        }else{
            document.querySelector("#d_grade").setAttribute("class",'failed');

        }
        document.querySelector("#displayBlock").style.display = "block";
       
    }

};

sData.getTotalAndAvg = () => {
    sData.total = 0;
    for(i = 0 ; i< sData.marks.length ;i++){
        
        sData.total += sData.marks[i];
    }
    sData.avg = sData.total/sData.marks.length;
    sData.getGrade();
    
}

var generateStudentData = (event) => {
    sData.readStudentData(event);
}

var resetFields = () => {

        document.querySelector("#sname").value = ' ';
        document.querySelector("#sage").value = ' ';
        document.querySelector("#class").value = ' ';
        document.querySelector("#m1").value = ' ';
        document.querySelector("#m2").value = ' ';
        document.querySelector("#m3").value = ' ';
        document.querySelector("#m4").value = ' ';
        document.querySelector("#m5").value = ' ';           
}

var validateName = (event) => {
    if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == 32)){
           return true;
    }
       else{
        return false;
    }
}

var validateAgeMarks = (event) => {
    if(event.keyCode >= 48 && event.keyCode <=57 ){
        return true;
    }else{
        return false;
    }
}