var stdDetails = {
    userData() {
        this.name = document.querySelector("#sname").value.trim();
        if (this.name == "") {
            document.querySelector("#error1").style.display = "block";
            return;
        } else {
            document.querySelector("#error1").style.display = "none";
        }
        this.age = document.querySelector("#sage").value.trim();
        if (this.age == "") {
            document.querySelector("#error2").style.display = "block";
            return;
        } else {
            document.querySelector("#error2").style.display = "none";
        }

        this.gender = document.querySelector("input[name = gender]:checked").value;
        this.sclass = document.querySelector("#sclass").value;

        var m1 = document.querySelector("#m1").value.trim();
        if (m1 == "") {
            document.querySelector("#error3").style.display = "block";
            return;
        } else {
            document.querySelector("#error3").style.display = "none";
        }

        var m2 = document.querySelector("#m2").value.trim();
        if (m2 == "") {
            document.querySelector("#error3").style.display = "block";
            return;
        } else {
            document.querySelector("#error3").style.display = "none";
        }

        var m3 = document.querySelector("#m3").value.trim();
        if (m3 == "") {
            document.querySelector("#error3").style.display = "block";
            return;
        } else {
            document.querySelector("#error3").style.display = "none";
        }

        var m4 = document.querySelector("#m4").value.trim();
        if (m4 == "") {
            document.querySelector("#error3").style.display = "block";
            return;
        } else {
            document.querySelector("#error3").style.display = "none";
        }

        var m5 = document.querySelector("#m5").value.trim();
        if (m5 == "") {
            document.querySelector("#error3").style.display = "block";
            return;
        } else {
            document.querySelector("#error3").style.display = "none";
        }
        this.marks = [];
        for (var i = 1; i <= 5; i++) {
            var id = "#m" + i;
            this.marks[i] = parseInt(document.querySelector(id).value);
        }
        this.getTotalAndAvg();
        this.displayStudentDetails();
    },
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 1; i < this.marks.length; i++) {
            this.total += this.marks[i] || 0;
        }
        this.avg = this.total / (this.marks.length - 1);
        this.getgrade();
    },
    getgrade() {
        this.grade = "";
        if (this.avg >= 40) {
            this.grade = "You Passed";
        } else {
            this.grade = "You Failed";
        }
    },
    displayStudentDetails() {
        document.querySelector("#d_name").innerHTML = this.name;
        document.querySelector("#d_age").innerHTML = this.age;
        document.querySelector("#d_gender").innerHTML = this.gender;
        document.querySelector("#d_class").innerHTML = this.sclass;
        document.querySelector("#d_total").innerHTML = this.total;
        document.querySelector("#d_avg").innerHTML = this.avg;
        document.querySelector("#d_grade").innerHTML = this.grade;
        document.querySelector("#displayBlock").style.display = "block";
    }
};
var readStudentDetails = () => {
    stdDetails.userData();
    resetValues();
    console.log(stdDetails);
}
var thank = () => {
    document.querySelector(".msg").style.display = "block";
    setTimeout(() => {
        document.querySelector(".msg").style.display = "";
    }, 5000);
}
var ValidityState = () => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return false;
    } else {
        return true;
    }
}

var ValidityState2 = () => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}

var resetValues = () => {
    document.querySelector("#sname").value = "";
    document.querySelector("#sage").value = "";
    document.querySelector("input[name = gender]").value = "";
    document.querySelector("#sclass").value = "";
    document.querySelector("#m1").value = "";
    document.querySelector("#m2").value = "";
    document.querySelector("#m3").value = "";
    document.querySelector("#m4").value = "";
    document.querySelector("#m5").value = "";

}
var cardsData = []
cardsData.push(readStudentDetails());