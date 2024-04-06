var employeeData = [
    {
        image : 'https://c4.wallpaperflare.com/wallpaper/948/78/527/tom-cruise-face-picture-wallpaper-preview.jpg',
        name : 'Michael',
        age : 54,
        gender : 'Male',
        basicSal: "85000",
        pfPercentage: "10",
        hraPercentage: '15'
    },
    {
        image : 'https://www.adgully.com/img/300/angelina-jolie.jpg',
        name : 'Angela',
        age : 45,
        gender : 'Female',
        basicSal: "72000",
        pfPercentage: "10",
        hraPercentage: '15'
    },
    {
        image : 'https://images.huffingtonpost.com/2016-06-21-1466523387-7561721-image.png',
        name : 'Richardo',
        age : 62,
        gender : 'Male',
        basicSal: "68000",
        pfPercentage: "10",
        hraPercentage: '15'
    }
]
var empdetails = (employeeData) => {
    var mainTag = document.createElement("div");
    mainTag.setAttribute("class", "main");
    mainTag.style.border = "1px solid";
    mainTag.style.width = "800px";
    mainTag.style.height = "auto";
    mainTag.style.margin = "20px auto";
    mainTag.style.backgroundColor = "purple";


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
    div5.innerText = `Basic Salary : ${employeeData.basicSal} Rs`;
    mainTag.append(div5);

    var div6 = document.createElement("div");
    div6.setAttribute("class", "pf");
    var pfAmount = parseFloat(employeeData.pfPercentage);
    var pfAmount = employeeData.basicSal * 15 / 100;
    div6.innerText = `PF Amount : ${pfAmount} Rs`;
    mainTag.append(div6);

    var div7 = document.createElement("div");
    div7.setAttribute("class", "hra");
    var hraAmount = parseFloat(employeeData.hraPercentage);
    var hraAmount = employeeData.basicSal * 10 / 100;
    div7.innerText = `HRA Amount : ${hraAmount} Rs`;
    mainTag.append(div7);

    var div8 = document.createElement("div");
    div8.setAttribute("class", "total");
    var totalAmount = basicSal + pfAmount + hraAmount;
    var totalAmount = parseFloat(totalAmount);
    div8.innerText = `Total Salary: ${totalAmount} Rs`;
    mainTag.append(div8);

    var div9 = document.createElement("p");
    div9.setAttribute("class", "copy");
    div9.style.textAlign = "center"
    div9.style.fontWeight = "700"
    div9.style.textDecoration = "underline"
    mainTag.append(div9)

    document.querySelector(".employeeDetails").append(mainTag);
}

// To eterate all employee data from JSON, one by one
for (var i = 0; i <= employeeData.length; i++) {
    empdetails(employeeData[i]);
}