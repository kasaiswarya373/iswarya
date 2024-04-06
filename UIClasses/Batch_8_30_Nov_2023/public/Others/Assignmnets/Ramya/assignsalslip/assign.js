var employeeDetailsList = [];
var empData = {
    readEmpData() {
        empData.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#age").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.basicSalary = document.querySelector("#basesal").value;
        this.basicSalary = parseInt(this.basicSalary)
        empData.pf = (this.basicSalary * 14) / 100;
        empData.hra = (this.basicSalary * 25) / 100;
        empData.empTotalSal = empData.pf + this.hra + empData.basicSalary;
        
       
        console.log(this.name)
        console.log(this.pf);
        console.log(this.hra)
        console.log(this.empTotalSal)
        this.displayEmpSalarySlip();
    }
    // console.log(this.basicSalary)
}

empData.displayEmpSalarySlip = () => {
    resetFields();
    document.querySelector("#displayBlock").style.display = "block"
    document.querySelector("#d_name").innerText = empData.name;
    document.querySelector("#d_age").innerText = empData.age;
    document.querySelector("#d_gender").innerText = empData.gender;
    document.querySelector("#d_basicsalary").innerText = empData.basicSalary;
    document.querySelector("#d_pf").innerText = empData.pf;
    document.querySelector("#d_hra").innerText = empData.hra;
    document.querySelector("#d_total").innerText = empData.empTotalSal;
    employeeDetailsList.push(JSON.parse(JSON.stringify(empData)));
}
generateSalarySlip = () => {
    empData.readEmpData();
}
var resetFields = () => {
    document.querySelector("#sname").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("#basesal").value = '';
}