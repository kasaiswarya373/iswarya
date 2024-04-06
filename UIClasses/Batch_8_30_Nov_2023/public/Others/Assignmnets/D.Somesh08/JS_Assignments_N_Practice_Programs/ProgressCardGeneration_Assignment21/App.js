
let userRecords = [];

let userData = {

    readData() {

        this.userName = document.querySelector('#userName').value;
        this.age = document.querySelector('#age').value;
        this.gender = document.querySelector('input[type=radio]:checked').value;
        this.course = document.querySelector('#course').value;
        this.marks = [];
        for (let i = 1; i < 5; i++) {
            let marksId = '#m' + i;
            userData.marks.push(parseInt(document.querySelector(marksId).value));
        }
        userData.totalMarks = 0;

        this.displayDetails(userData);

    },


    displayDetails(data) {

        document.querySelector('#displayDetails').style.display = 'block';

        var ulTag = document.createElement("ul");
        ulTag.setAttribute('id', 'resultUlTag')
        var liTag = document.createElement("li");
        liTag.innerText = `Employee Name : ` + data.userName;
        ulTag.append(liTag);

        var liTag2 = document.createElement("li");
        liTag2.innerText = `age : ` + data.age;
        ulTag.append(liTag2);

        var liTag3 = document.createElement("li");
        liTag3.innerText = `gender : ` + data.gender;
        ulTag.append(liTag3);

        var liTag4 = document.createElement("li");
        liTag4.innerText = `course : ` + data.course;
        ulTag.append(liTag4);

        for (let i = 0; i < data.marks.length; i++) {
            data.totalMarks += data.marks[i];
        }

        var liTag5 = document.createElement("li");
        liTag5.innerText = `totalMarks : ` + data.totalMarks;
        ulTag.append(liTag5);
        document.querySelector("#displayDetails").append(ulTag);
        userRecords.push(JSON.parse(JSON.stringify(userData)));
        console.log(userRecords);
        clearInputFields();
    }
}

let clearInputFields = () => {
    document.querySelector("#userName").value = '';
    document.querySelector("#age").value = '';

    for (let i = 1; i < 5; i++) {
        let marksId = '#m' + i;
        document.querySelector(marksId).value = '';
    }
}