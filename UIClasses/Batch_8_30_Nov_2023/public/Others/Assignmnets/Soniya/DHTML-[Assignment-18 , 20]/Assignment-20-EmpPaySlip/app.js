var empData = 
{
     readEmpData()
     {
        this.name = document.querySelector("#userName").value;
        this.age = document.querySelector("#age").value;
        this.gender = document.querySelector("input[name = gender]:checked").value;
        this.department = document.querySelector("#department").value;
        this.basicSalary = document.querySelector("#basicSal").value;
        this.basicSalary = parseInt(this.basicSalary);
        this.calHraPfTax();
        this.calTotSal();
     },

     calHraPfTax()
     {
        this.pf = (this.basicSalary * 3) / 100;
        this.hra = (this.basicSalary * 4) / 100;
        this.tax = (this.basicSalary * 2) / 100;
    },
      
     calTotSal()
     {
        this.totSalary = (this.basicSalary + this.pf + this.hra) - this.tax ;
     }
};

var generatePaySlip = () =>
{
    empData.readEmpData();
    document.querySelector("#Name").innerText = empData.name;
    document.querySelector("#Age").innerText = empData.age;
    document.querySelector("#Gender").innerText = empData.gender;
    document.querySelector("#Department").innerText = empData.department;
    document.querySelector("#BasicSal").innerText = empData.basicSalary;
    document.querySelector("#Pf").innerText = empData.pf;
    document.querySelector("#Hra").innerText = empData.hra;
    document.querySelector("#Tax").innerText = empData.tax;
    document.querySelector("#TotalSalary").innerText = empData.totSalary;
    clearAndDisabledinput();
}

var clearAndDisabledinput = () =>
{
    document.querySelector("#userName").value='';
    document.querySelector("#userName").disabled = true;
    document.querySelector("#age").value='';
    document.querySelector("#age").disabled = true;
    document.querySelector("#basicSal").value='';
    document.querySelector("#basicSal").disabled = true;
    document.querySelector("#department").disabled=true;
    document.querySelector("input[name = gender]:checked").checked=false;
    document.querySelector("input[value = Female]").disabled=true ;
    document.querySelector("input[value = Male]").disabled=true ;
    document.querySelector("#payslip").disabled=true ;

}   


