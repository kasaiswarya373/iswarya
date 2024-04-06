var employeedetails = {
    name: 'Santhoshi',
    age: 23,
    gender : 'Female',
    location: 'Hyderabad',
    department : 'IT',
    imageurl : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D"
};
var addempdetails = (employeedetails) => {
    var maintag = document.createElement("div");
maintag.setAttribute("class","empdetails");
var div1 = document.createElement("div");
div1.setAttribute("class","class1");
var imgtag = document.createElement("img");
imgtag.setAttribute("class","imgd");
imgtag.setAttribute("src",employeedetails.imageurl);
div1.append(imgtag);
maintag.append(div1);

var div2 = document.createElement("div");

var div3 = document.createElement("div");
div3.setAttribute("class","empdetails");
var b1 = document.createElement("b");
b1.innerText = "Emp-Name : ";
div3.append(b1);
var s1 = document.createElement("span");
s1.innerText = employeedetails.name;
div3.append(s1);
div2.append(div3);

var div4 = document.createElement("div");
div4.setAttribute("class","empdetails");
var b2 = document.createElement("b");
b2.innerText = "Emp-Age : ";
div3.append(b2);
var s2 = document.createElement("span");
s2.innerText = employeedetails.age;
div4.append(s2);
div2.append(div4);

var div5 = document.createElement("div");
div3.setAttribute("class","empdetails");
var b3 = document.createElement("b");
b3.innerText = "Emp-Gender : ";
div5.append(b3);
var s3 = document.createElement("span");
s3.innerText = employeedetails.gender;
div5.append(s3);
div2.append(div5);

var div6 = document.createElement("div");
div6.setAttribute("class","empdetails");
var b4 = document.createElement("b");
b4.innerText = "EmpLocation : ";
div6.append(b4);
var s4 = document.createElement("span");
s4.innerText = employeedetails.location;
div6.append(s4);
div2.append(div6);

var div7 = document.createElement("div");
div7.setAttribute("class","empdetails");
var b5 = document.createElement("b");
b5.innerText = "EmpDept : ";
div7.append(b5);
var s5 = document.createElement("span");
s5.innerText = employeedetails.department;
div7.append(s5);
div2.append(div7);

maintag.append(div2);
document.querySelector(".edetails").append(maintag);
}
addempdetails(employeedetails);
