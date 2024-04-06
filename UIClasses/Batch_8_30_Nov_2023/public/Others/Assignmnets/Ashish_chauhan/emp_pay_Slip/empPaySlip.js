var empData = {
  readEmpData() {
    empData.name = document.querySelector("#ename").value;
    empData.age = document.querySelector("#age").value;
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.department = document.querySelector("#empDepartment").value;
    empData.salary = parseInt(document.querySelector("#salary").value);
    this.calPfAndHra();
  },

  calPfAndHra() {
    this.pf = (this.salary * 14) / 100;
    this.pf = parseInt(this.pf);

    this.hra = (this.salary * 25) / 100;
    this.hra = parseInt(this.hra);

    this.totalSalary = this.salary + this.pf + this.hra;
    this.totalSalary = parseInt(this.totalSalary);
    this.calTax();
  },

  calTax() {
    this.display();
    if (this.salary > 100000) {
      this.taxPercent = 10;
    } else if (this.salary > 50000) {
      this.taxPercent = 5;
    } else {
      this.taxPercent = 0;
    }
    this.taxamt = (this.totalSalary * this.taxPercent) / 100;
    this.taxamt = parseInt(this.taxamt);
    this.totalSalary = this.totalSalary - this.taxamt;
    this.totalSalary = parseInt(this.totalSalary);
    this.display();
  },

  display() {
    clearvalues();
    document.querySelector("#displayBlock").style.display = "block";
    document.querySelector("#d_name").innerText = this.name;
    document.querySelector("#d_age").innerText = this.age;
    document.querySelector("#d_gender").innerText = this.gender;
    document.querySelector("#d_pf").innerText = this.pf;
    document.querySelector("#d_hra").innerText = this.hra;
    document.querySelector("#d_tax").innerText = this.taxamt;
    document.querySelector("#d_salary").innerText = this.totalSalary;
  },
};

var readData = () => {
  empData.readEmpData();
};

var clearvalues = () => {
  document.querySelector("#ename").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#salary").value = "";
};
