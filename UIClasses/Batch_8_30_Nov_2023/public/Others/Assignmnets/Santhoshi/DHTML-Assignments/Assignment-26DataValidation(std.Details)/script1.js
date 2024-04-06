
var validation = (event) => {
    var stdname = document.querySelector("#sname").value;
    if(event.keyCode >= 65 && event.keyCode <= 90){
        return true;
    }else if (event.keyCode >= 97 && event.keyCode <= 122){
        return true;
    } else{
        return false;
    }
}

var validationnumber = (event) => {
    var num = document.querySelector("#sage").value;
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    }else{
        return false;
    }
}

var validationmarks = (event) => {
    var marksnumber = document.querySelector(".marks").value;
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    }else{
        return false;
    }
    
}
var userData = {

    readStudentData  (){
        userData.name = document.querySelector("#sname").value ;
        if(this.name ==''){
            document.querySelector("#error1").style.display = 'block';
        }
        userData.age = document.querySelector("#sage").value ;
        if(this.age ==''){
            document.querySelector("#error2").style.display = 'block';
        }
        userData.gender = document.querySelector("input[name=gender]:checked").value ;
        userData.class = document.querySelector("#sclass").value ;
    },


    getTotalAndAvg () {
        userData.marks = [];
        for(var i = 1    ; i <= 6; i++){
            var id = '#m'+i;
            var value = parseInt(document.querySelector(id).value);
            userData.marks.push(value);
        }
            userData.total = 0;
                for (var i = 0 ; i < userData.marks.length; i++) {
                    userData.total += userData.marks[i];
                }
             userData.avg = userData.total / userData.marks.length;
             userData.readStudentData();
           
    },

    
    displayStudentDetails (){
        userData.getTotalAndAvg ();
        document.querySelector("#display").style.display = 'block';
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerHTML = this.gender;
        document.querySelector("#dclass").innerHTML = this.class;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
      
    }
}