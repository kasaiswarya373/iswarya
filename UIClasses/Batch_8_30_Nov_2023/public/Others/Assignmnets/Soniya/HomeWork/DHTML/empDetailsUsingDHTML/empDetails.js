var employee = [
        {
            img : "../empDetailsUsingDHTML/images/Emp-1.png",
            Name: "Rohit",
            Age : "23",
            Gender : "Male",
            basicSalary : 25000,
            PF : 12,
            HRA : 10,
            Tax : 0.05,
        },
        {
            img : "../empDetailsUsingDHTML/images/Emp-1.png",
            Name: "Rahul",
            Age : "23",
            Gender : "Male",
            basicSalary : 25000,
            PF : 12,
            HRA : 10,
            Tax : 0.05,
        },
        {
            img : "../empDetailsUsingDHTML/images/Emp-1.png",
            Name: "Ranjit",
            Age : "23",
            Gender : "Male",
            basicSalary : 25000,
            PF : 12,
            HRA : 10,
            Tax : 0.05,
        },
        {
            img : "../empDetailsUsingDHTML/images/Emp-1.png",
            Name: "Lekhya",
            Age : "23",
            Gender : "Female",
            basicSalary : 25000,
            PF : 12,
            HRA : 10,
            Tax : 0.05,
        }
];
var empData = (employee) => {
    var ul = document.createElement("ul");
    var imgLi = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", employee.img);
    imgLi.append(imgTag);
    ul.append(imgLi);

    var nameLi = document.createElement("li");
    nameLi.innerText = `Name : ${employee.Name}`;
    ul.append(nameLi);

    var ageLi = document.createElement("li");
    ageLi.innerText = `Age : ${employee.Age}`;
    ul.append(ageLi);

    var genderLi = document.createElement("li");
    genderLi.innerText = `Gender : ${employee.Gender}`;
    ul.append(genderLi);

    var basicSalLi = document.createElement("li");
    basicSalLi.innerText = `Basic Salary : ${employee.basicSalary}`;
    ul.append(basicSalLi);

    var pfLi = document.createElement("li");
    employee.PF = (employee.basicSalary * employee.PF) / 100;
    pfLi.innerText = `PF : ${employee.PF}`;
    ul.append(pfLi);

    var hraLi = document.createElement("li");
    employee.HRA = (employee.basicSalary * employee.HRA) / 100;
    hraLi.innerText = `HRA : ${employee.HRA}`;
    ul.append(hraLi);

    var taxLi = document.createElement("li");
    employee.Tax = (employee.basicSalary * employee.Tax);
    taxLi.innerText = `Tax : ${employee.Tax}`;
    ul.append(taxLi);

    var totSalLi = document.createElement("li");
    var totSal = employee.basicSalary + employee.PF + employee.HRA;
    totSal = totSal - employee.Tax;
    totSalLi.innerText = `Total Salary : ${totSal}`;
    ul.append(totSalLi);

    document.getElementById("empContainer").append(ul);
}


for (var i = 0; i < employee.length; i++)
 {
    empData(employee[i]);
}
        


    



