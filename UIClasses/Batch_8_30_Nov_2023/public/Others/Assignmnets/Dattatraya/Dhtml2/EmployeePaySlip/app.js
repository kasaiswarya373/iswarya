var employeeDetails = {
  readEmpData() {
    employeeDetails.name = document.querySelector("#ename").value;
    employeeDetails.age = document.querySelector("#eage").value;
    employeeDetails.gender = document.querySelector(
      "input[name=gender]:checked"
    ).value;
    employeeDetails.department = document.querySelector("#edepartment").value;
    employeeDetails.basicsalary = parseInt(
      document.querySelector("#ebasicSalary").value
    );
    this.calculatePfandHra();
  },
  calculatePfandHra() {
    this.pf = parseInt((this.basicsalary * 14) / 100);

    this.hra = parseInt((this.basicsalary * 25) / 100);

    this.totalsalary = parseInt(this.basicsalary + this.pf + this.hra);
    this.calculateTax();
  },
  calculateTax() {
    if (this.basicsalary > 100000) {
      this.taxPercent = 10;
    } else if (this.basicsalary > 50000) {
      this.taxPercent = 5;
    } else {
      this.taxPercent = 0;
    }
    this.taxAmount = parseInt((this.totalsalary * this.taxPercent) / 100);
    this.totalsalary = this.totalsalary - this.taxAmount;
    this.totalsalary = parseInt(this.totalsalary);
    this.displayEmployeeDetails();
  },
  displayEmployeeDetails() {
    resetFields();
    document.querySelector("#displayBlock").style.display = "block";
    document.querySelector("#d_name").innerText = this.name;
    document.querySelector("#d_age").innerText = this.age;
    document.querySelector("#d_gender").innerText = this.gender;
    // document.querySelector("d-department").innerText = this.department;
    document.querySelector("#d_pf").innerText = this.pf;
    document.querySelector("#d_hra").innerText = this.hra;
    document.querySelector("#d_tax").innerText = this.taxAmount;
    document.querySelector("#d_totalSalary").innerText = this.totalsalary;
  },
};

var readData = () => {
  employeeDetails.readEmpData();
};

var resetFields = () => {
  document.querySelector("#ename").value = "";
  document.querySelector("#eage").value = "";
  document.querySelector("#ebasicSalary").value = "";
};
