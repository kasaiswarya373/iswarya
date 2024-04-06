var employeeDetails = {
    empData: [],
    calPfHraTotalSalaryTax(emp) {
        emp.pf = emp.basicSalary * 5 / 100;
        emp.hra = emp.basicSalary * 7 / 100;
        emp.totalSalary = emp.basicSalary + emp.pf + emp.hra;
        emp.tax = emp.totalSalary * 3 / 100;
    },
};

var empDomContainer = (emp)=>
{
var parentContainer = document.querySelector(".parentContainer");
var subContainer = document.createElement("div");
subContainer.setAttribute("class","subContainers");
var imgContainer = document.createElement("div");
imgContainer.setAttribute("id","imgContainer");
var img = document.createElement("img");
img.setAttribute("src",emp.img);
imgContainer.append(img);
subContainer.append(imgContainer);

var nameDiv = document.createElement("div");
nameDiv.setAttribute("class","data");
var nameSpan = document.createElement("span");
nameSpan.setAttribute("class","label");
nameSpan.innerText= "Name";
nameDiv.append(nameSpan);
var colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":" ;
nameDiv.append(colonSpan);
var nameData = document.createElement("span");
nameData.setAttribute("class","labelData");
nameData.innerText = `${emp.name}`;
nameDiv.append(nameData);
subContainer.append(nameDiv);

var ageDiv = document.createElement("div");
ageDiv.setAttribute("class","data");
var ageSpan = document.createElement("span");
ageSpan.setAttribute("class","label");
ageSpan.innerText="Age";
ageDiv.append(ageSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
ageDiv.append(colonSpan);
var age = document.createElement("span");
age.setAttribute("class","labelData");
age.innerText = `${emp.age}`;
ageDiv.append(age);
subContainer.append(ageDiv);

var genderDiv = document.createElement("div");
genderDiv.setAttribute("class","data");
var genderSpan = document.createElement("span");
genderSpan.setAttribute("class","label");
genderSpan.innerText="Gender";
genderDiv.append(genderSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
genderDiv.append(colonSpan);
var gender = document.createElement("span");
gender.setAttribute("class","labelData");
gender.innerText = `${emp.gender}`;
genderDiv.append(gender);
subContainer.append(genderDiv);

var departmentDiv = document.createElement("div");
departmentDiv.setAttribute("class","data");
var departmentSpan = document.createElement("span");
departmentSpan.setAttribute("class","label");
departmentSpan.innerText="Department";
departmentDiv.append(departmentSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
departmentDiv.append(colonSpan);
var department = document.createElement("span");
department.setAttribute("class","labelData");
department.innerText = `${emp.department}`;
departmentDiv.append(department);
subContainer.append(departmentDiv);

var basicSalDiv = document.createElement("div");
basicSalDiv.setAttribute("class","data");
var basicSalSpan = document.createElement("span");
basicSalSpan.setAttribute("class","label");
basicSalSpan.innerText="Basic Salary";
basicSalDiv.append(basicSalSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
basicSalDiv.append(colonSpan);
var basicSal = document.createElement("span");
basicSal.setAttribute("class","labelData");
basicSal.innerText = `${emp.basicSalary}`;
basicSalDiv.append(basicSal);
subContainer.append(basicSalDiv);


var pfDiv = document.createElement("div");
pfDiv.setAttribute("class","data");
var pfSpan = document.createElement("span");
pfSpan.setAttribute("class","label");
pfSpan.innerText="PF";
pfDiv.append(pfSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
pfDiv.append(colonSpan);
var pf = document.createElement("span");
pf.setAttribute("class","labelData");
pf.innerText = `${emp.pf}`;
pfDiv.append(pf);
subContainer.append(pfDiv);

var hraDiv = document.createElement("div");
hraDiv.setAttribute("class","data");
var hraSpan = document.createElement("span");
hraSpan.setAttribute("class","label");
hraSpan.innerText="HRA";
hraDiv.append(hraSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
hraDiv.append(colonSpan);
var hra = document.createElement("span");
hra.setAttribute("class","labelData");
hra.innerText = `${emp.hra}`;
hraDiv.append(hra);
subContainer.append(hraDiv);

var totSalDiv = document.createElement("div");
totSalDiv.setAttribute("class","data");
var totSalSpan = document.createElement("span");
totSalSpan.setAttribute("class","label");
totSalSpan.innerText="Total Salary";
totSalDiv.append(totSalSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
totSalDiv.append(colonSpan);
var totalSal = document.createElement("span");
totalSal.setAttribute("class","labelData");
totalSal.innerText = `${emp.totalSalary}`;
totSalDiv.append(totalSal);
subContainer.append(totSalDiv);

var taxDiv = document.createElement("div");
taxDiv.setAttribute("class","data");
var taxSpan = document.createElement("span");
taxSpan.setAttribute("class","label");
taxSpan.innerText="Tax";
taxDiv.append(taxSpan);
colonSpan = document.createElement("span");
colonSpan.setAttribute("class","colon");
colonSpan.innerText=":";
taxDiv.append(colonSpan);
var tax = document.createElement("span");
tax.setAttribute("class","labelData");
tax.innerText = `${emp.tax}`;
taxDiv.append(tax);
subContainer.append(taxDiv);
parentContainer.append(subContainer);
}

axios.get("http://localhost:8082/get/employeeDataList").then((response) => {
    console.log("success");
    console.log(response);
    employeeDetails.empData = response.data.empData;
    employeeDetails.empData.forEach((emp) => {
        employeeDetails.calPfHraTotalSalaryTax(emp);
        empDomContainer(emp);
    });
    
}).catch((err) => {
    console.log(err);
});

