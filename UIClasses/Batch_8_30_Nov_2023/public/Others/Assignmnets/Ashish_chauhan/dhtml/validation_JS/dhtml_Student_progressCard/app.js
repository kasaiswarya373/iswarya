var studentDetailsList = [];

var userData = {
  readStudentData() {
    this.name = document.querySelector("#sname").value;

    // validation code for name input start
    this.name = this.name.trim();
    if (this.name == "") {
      document.querySelector("#nameErr").style.display = "block";
      return;
    } else {
      document.querySelector("#nameErr").style.display = "none";
    }
    // validation code for name input Ends

    // if (this.name == "") {
    //   // show error
    // }

    this.age = document.querySelector("#sage").value;
    // validation code for Age input start
    this.age = this.age.trim();
    if (this.age == "") {
      document.querySelector("#ageErr").style.display = "block";
      return;
    } else {
      document.querySelector("#ageErr").style.display = "none";
    }
    // validation code for name input Ends

    userData.gender = document.querySelector(
      "input[name=gender]:checked"
    ).value;

    this.class = document.querySelector("#studentClass").value;
    this.marks = [];

    for (var i = 1; i <= 5; i++) {
      var id = "#m" + i; //
      var value = parseInt(document.querySelector(id).value);
      this.marks.push(value);

      // this.marks = this.marks.trim();
      if (this.marks == "") {
        document.querySelector("#marksErr").style.display = "block";
        return;
      } else {
        document.querySelector("#marksErr").style.display = "none";
      }
    }

    this.getTotalAndAvg();
  },
  getGrade() {
    if (this.avg >= 40) {
      this.grade = "You got Passed";
    } else {
      this.grade = "Surprise....";
    }
    this.displayStudentDetails();
  },
  displayStudentDetails() {
    resetFields();

    document.querySelector("#displayBlock").style.display = "block";

    document.querySelector("#d_name").innerText = this.name;
    document.querySelector("#d_age").innerText = this.age;
    document.querySelector("#d_gender").innerText = this.gender;
    document.querySelector("#d_total").innerText = this.total;
    document.querySelector("#d_avg").innerText = this.avg;
    document.querySelector("#d_grade").innerText = this.grade;

    if (this.avg >= 40) {
      document.querySelector("#d_grade").setAttribute("class", "passed");
    } else {
      document.querySelector("#d_grade").setAttribute("class", "surprise");
    }
    studentDetailsList.push(JSON.parse(JSON.stringify(userData)));

    // var ulTag = document.createElement("ul");
    // var liTag = document.createElement('li');
    // liTag.innerText = 'Student Name :' + this.name;
    // ulTag.append(liTag);

    // document.querySelector(".progressCardHolder").append(ulTag);
    console.log(studentDetailsList);
  },
};

userData.getTotalAndAvg = () => {
  userData.total = 0;
  for (var i = 0; i < userData.marks.length; i++) {
    userData.total += userData.marks[i];
  }
  userData.avg = userData.total / userData.marks.length;
  userData.getGrade();
};

var generateProgressCard = () => {
  userData.readStudentData();
};

var resetFields = () => {
  document.querySelector("#sname").value = "";
  document.querySelector("#sage").value = "";
};

var validateData = (event) => {
  console.log(event);
  if (
    (event.keyCode >= 65 && event.keyCode <= 90) ||
    (event.keyCode >= 97 && event.keyCode <= 122)
  ) {
    // Validating only uppercase and lowercase
    return true;
  } else {
    return false;
  }
  return true;
};

var validateAge = (event) => {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    // Validating only numbers
    return true;
  } else {
    return false;
  }
  return true;
};
