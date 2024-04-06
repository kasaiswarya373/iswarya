var empdetails = {
    name : 'Raj',
    age : 20,
    gender : 'Male',
    dept : "IT",
    location : "Hyd",
    imageurl : "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
};
var addempdetails = (empdetails) => {
    var div0 = document.createElement("div");
    div0.setAttribute("class", "details");
    var div1 = document.createElement("div");
    div1.setAttribute("class", "imgdetails");
    var itag = document.createElement("img");
    itag.setAttribute("class", "imgd");
    itag.setAttribute("src",empdetails.imageurl);
    div1.append(itag);
    div0.append(div1);
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    div3.setAttribute("class", "edetails");
    var b1 = document.createElement("b");
    b1.innerText = "EmpName: ";
    div3.append(b1);
    var s1 = document.createElement("span");
    s1.innerText = empdetails.name;
    div3.append(s1);
    div2.append(div3);
    var div4 = document.createElement("div");
    div4.setAttribute("class", "edetails");
    var b2 = document.createElement("b");
    b2.innerText = "EmpAge: ";
    div4.append(b2);
    var s2 = document.createElement("span");
    s2.innerText = empdetails.age;
    div4.append(s2);
    div2.append(div4);
    var div5 = document.createElement("div");
    div5.setAttribute("class", "edetails");
    var b3 = document.createElement("b");
    b3.innerText = "EmpGender: ";
    div5.append(b3);
    var s3 = document.createElement("span");
    s3.innerText = empdetails.gender;
    div5.append(s3);
    div2.append(div5);
    var div6 = document.createElement("div");
    div6.setAttribute("class", "edetails");
    var b4 = document.createElement("b");
    b4.innerText = "EmpDept: ";
    div6.append(b4);
    var s4 = document.createElement("span");
    s4.innerText = empdetails.dept;
    div6.append(s4);
    div2.append(div6);
    var div7 = document.createElement("div");
    div7.setAttribute("class", "edetails");
    var b5 = document.createElement("b");
    b5.innerText = "EmpLocation: ";
    div7.append(b5);
    var s5 = document.createElement("span");
    s5.innerText = empdetails.location;
    div7.append(s5);
    div2.append(div7);
    div0.append(div2);
    console.log(div0)

    document.querySelector(".empdetailscontainer").append(div0);
}
addempdetails(empdetails);