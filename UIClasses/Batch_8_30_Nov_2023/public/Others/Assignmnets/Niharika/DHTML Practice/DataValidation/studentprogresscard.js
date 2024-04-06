var validData = (event) => {
    console.log(event);
    var stdname = document.querySelector("#sname").value;
    stdname = stdname.trim();
     //stdname = stdname.toLowerCase();
    if((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90)){
        return true;
    }
    else{
        return false;
    }
}
var validNum = (event) => {
    console.log(event);
    var stdage = document.querySelector("#sage").value;
    stdage = stdage.trim();
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    }
    else{
        return false;
    }
}
var validValue = (event) => {
    for(var i=1;i<=6;i++){
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
var studentData = {
    readStudentData() {
        this.name = document.querySelector("#sname").value;
        if(this.name ==''){
            document.querySelector("#error1").style.display = 'block';
        }
        this.age = document.querySelector("#sage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.marks = [];
        for(var i=1;i<=6;i++){
            var id = '#m' + i;
            var value = parseInt(document.querySelector(id).value);
          //  this.marksList.push(value);
            this.marks.push(value);
        }
        this.getAvgAndTotal();
    },
    getAvgAndTotal() {
        this.total = 0;
        for(var i=0;i<this.marks.length;i++){
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    },
    
    getGrade() {
        if(this.avg>=40){
            this.grade = 'Passed';
        }
        else{
            this.grade = 'Fail'
        }
        this.displayInfo();
    },
    displayInfo() {
        resetvalues();
        var maindivtag = document.createElement("div");
        maindivtag.setAttribute("class","container");

        var div1 = document.createElement("div");
         div1.setAttribute("class","detailsblock");
         var b1 = document.createElement("b");
         b1.innerText = 'Student-Name: ';
         div1.append(b1);
         var s1 = document.createElement("span");
         s1.innerText = this.name;
         div1.append(s1);
         maindivtag.append(div1);

         var div2 = document.createElement("div");
         div2.setAttribute("class","detailsblock");
         var b2 = document.createElement("b");
         b2.innerText = 'Student-Age: ';
         div2.append(b2);
         var s2 = document.createElement("span");
         s2.innerText = this.age;
         div2.append(s2);
         maindivtag.append(div2);

         var div3 = document.createElement("div");
         div3.setAttribute("class","detailsblock");
         var b3 = document.createElement("b");
         b3.innerText = 'Total-Marks:  ';
         div3.append(b3);
         var s3 = document.createElement("span");
         s3.innerText = this.total;
         div3.append(s3);
         maindivtag.append(div3);

         var div4 = document.createElement("div");
         div4.setAttribute("class","detailsblock");
         var b4 = document.createElement("b");
         b4.innerText = 'Avg : ';
         div4.append(b4);
         var s4 = document.createElement("span");
         s4.innerText = this.avg;
         div4.append(s4);
         maindivtag.append(div4);

         var div5 = document.createElement("div");
         div5.setAttribute("class","detailsblock");
         var b5 = document.createElement("b");
         b5.innerText = 'Grade: ';
         div5.append(b5);
         var s5 = document.createElement("span");
         s5.innerText = this.grade;
         div5.append(s5);
         maindivtag.append(div5); 

         document.querySelector(".display").append(maindivtag);
    }

}
var resetvalues = () => {
    document.querySelector("#sname").value = '';
    document.querySelector("#sage").value = '';
    document.querySelector("#studentClass").value = '';
    for(var i=1;i<=6;i++){
        var id = '#m' + i;
        document.querySelector(id).value = '';
    }

}
 var displayDetails = () => {
    studentData.readStudentData();
 }