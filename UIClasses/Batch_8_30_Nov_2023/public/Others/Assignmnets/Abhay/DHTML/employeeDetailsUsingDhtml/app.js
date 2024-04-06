var employeeData = [
    {
        image: "https://png.pngtree.com/background/20230610/original/pngtree-free-png-male-portrait-vector-illustration-with-beard-picture-image_3018432.jpg",
        name: "Abhay",
        age: "25",
        gender: "Male",
        basicSal: "25000",
        pfPercentage: "10",
        hraPercentage: '15',
    },
    {
        image: "https://png.pngtree.com/background/20230610/original/pngtree-free-png-male-portrait-vector-illustration-with-beard-picture-image_3018432.jpg",
        name: "Ajay",
        age: "30",
        gender: "Male",
        basicSal: "250000",
        pfPercentage: "10",
        hraPercentage: '15',
    },
    {
        image: "https://png.pngtree.com/background/20230610/original/pngtree-free-png-male-portrait-vector-illustration-with-beard-picture-image_3018432.jpg",
        name: "Shubham",
        age: "24",
        gender: "Male",
        basicSal: "25000",
        pfPercentage: "10",
        hraPercentage: '15',
    },
    {
        image: "https://png.pngtree.com/background/20230610/original/pngtree-free-png-male-portrait-vector-illustration-with-beard-picture-image_3018432.jpg",
        name: "Shabda",
        age: "24",
        gender: "Female",
        basicSal: "20000",
        pfPercentage: "10",
        hraPercentage: '15',
    }
];
var empdetails = (employeeData) => {
    var mainTag = document.createElement("div");
    mainTag.setAttribute("class", "main");
    mainTag.style.border = "1px solid";
    mainTag.style.width = "400px";
    mainTag.style.height = "auto";
    mainTag.style.margin = "20px auto";
    mainTag.style.backgroundColor = "yellow";


    var div1 = document.createElement("div");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", employeeData.image);
    div1.append(imgTag);
    mainTag.append(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "name");
    div2.innerText = `Employee Name : ${employeeData.name}`;
    mainTag.append(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "age");
    div3.innerText = `Age : ${employeeData.age}`;
    mainTag.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class", "gender");
    div4.innerText = `Gender : ${employeeData.gender}`;
    mainTag.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class", "basicSal");
    var basicSal = parseFloat(employeeData.basicSal);
    div5.innerText = `Basic Salary : ${employeeData.basicSal} rs`;
    mainTag.append(div5);

    var div6 = document.createElement("div");
    div6.setAttribute("class", "pf");
    var pfAmount = parseFloat(employeeData.pfPercentage);
    var pfAmount = employeeData.basicSal * 15 / 100;
    div6.innerText = `PF Amount : ${pfAmount} rs`;
    mainTag.append(div6);

    var div7 = document.createElement("div");
    div7.setAttribute("class", "hra");
    var hraAmount = parseFloat(employeeData.hraPercentage);
    var hraAmount = employeeData.basicSal * 10 / 100;
    div7.innerText = `HRA Amount : ${hraAmount} rs`;
    mainTag.append(div7);

    var div8 = document.createElement("div");
    div8.setAttribute("class", "total");
    var totalAmount = basicSal + pfAmount + hraAmount;
    var totalAmount = parseFloat(totalAmount);
    div8.innerText = `Total Salary: ${totalAmount} rs`;
    mainTag.append(div8);

    var div9 = document.createElement("p");
    div9.setAttribute("class", "copy");
    div9.style.textAlign = "center"
    div9.style.fontWeight = "700"
    div9.style.textDecoration = "underline"
    div9.innerText = `Copyright @Abhay2024`;
    mainTag.append(div9)

    document.querySelector(".employeeDetails").append(mainTag);
}

for (var i = 0; i <= employeeData.length; i++) {
    empdetails(employeeData[i]);
}