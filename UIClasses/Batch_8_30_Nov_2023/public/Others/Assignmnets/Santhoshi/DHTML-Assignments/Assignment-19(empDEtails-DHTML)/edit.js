var employeeData = {
    image :"https://img.freepik.com/free-vector/cute-student-cartoon-character_1308-133976.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais",
    name : "santhoshi",
    age : "22",
    gender : "female",
    department : "IT",
    basicsalary : "30000",
    pf : "14",
    hra : "25"
};

var empdetails = (employeeData) => {
    var maintag = document.createElement("div");
    maintag.setAttribute("class" , "main");

    var div1 = document.createElement("div");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src" , employeeData.image);
    div1.append(imgTag);
    maintag.append(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class" , "name");
    div2.innerText = `Employee Name : ${employeeData.name}`;
    maintag.append(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class" , "age");
    div3.innerText = `Employee Age : ${employeeData.age}`;
    maintag.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class" , "gender");
    div4.innerText = `Employee Gender : ${employeeData.gender}`;
    maintag.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class" , "dept");
    div5.innerText = `Employee DEpartment : ${employeeData.department}`;
    maintag.append(div5);

    var div6 = document.createElement("div");
    div6.setAttribute("class" , "basicsalary");
    var basicsalary = parseFloat(employeeData.basicsalary);
    div6.innerText = `Employee Basicsalary : ${employeeData.basicsalary}`;
    maintag.append(div6);

    var div7 = document.createElement("div");
    div7.setAttribute("class" , "pf");
    var pfAmount = parseFloat(employeeData.pf);
    var pfAmount = (employeeData.basicsalary * 14) / 100;
    div7.innerText = `Employee pf :${pfAmount}`;
    maintag.append(div7);

    var div8 = document.createElement("div");
    div8.setAttribute("class" , "hra");
    var hraAmount = parseFloat(employeeData.hra);
    var hraAmount = (employeeData.basicsalary * 25) / 100;
    div8.innerText = `Employee hra :${hraAmount}`;
    maintag.append(div8);

    var div9 = document.createElement("div");
    div9.setAttribute("class" , "total");
    var total = basicsalary + pfAmount + hraAmount;
    var total = parseFloat(total);
    div9.innerText = `Total Salary : ${total}`;
    maintag.append(div9);

    


    document.querySelector(".edetails").append(maintag);

}
empdetails(employeeData);

















































