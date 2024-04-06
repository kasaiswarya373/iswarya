var student = {

    readData() 
    {
        student.name = document.querySelector("#name").value;
        student.age = document.querySelector("#age").value;
        student.gender = document.querySelector("input[name=gender]:checked").value;
        student.class = document.querySelector("#class").value;
        student.marks = [];
        for(var i = 1;i <= 5;i++)
        {
            var id = "#m"+i;
            var val = parseInt(document.querySelector(id).value);
            student.marks.push(val);
        }
        this.getTotAndAvg();
        
    },
    
    getTotAndAvg()
    {
        
        var total = 0;
        var avg = 0;
        for (var i = 0; i < student.marks.length; i++)
        {
            total += student.marks[i];
        }
        avg = total / student.marks.length;
        student.total = total;
        student.avg = avg;
    }
};
    
        
    displayStudentDetails = () =>
    {
        student.readData();
        document.querySelector("#progressCard").style.display = "block";
        document.querySelector("#dName").innerHTML = student.name;
        document.querySelector("#dAge").innerHTML = student.age;
        document.querySelector("#dClass").innerHTML = student.class;
        document.querySelector("#dGender").innerHTML = student.gender;
        document.querySelector("#dTotal").innerHTML = student.total;
        document.querySelector("#dAvg").innerHTML = student.avg;
    if(student.avg >= 50)
        {
            document.querySelector("#dResult").innerHTML = "You did it";
            document.querySelector("#dResult").style.color= "green";
        }
        else
        {
            document.querySelector("#dResult").innerHTML = "Better luck for next time";
            document.querySelector("#dResult").style.color = "red";
        }
    }