var empData={
    readEmpData(){
        this.name = document.querySelector("#ename").value;
        this.age= document.querySelector("#eage").value;
        this.gender= document.querySelector("input[name=gender]:checked").value;
        this.department= document.querySelector("#Department").value;
        this.salary= parseInt(document.querySelector("#salary").value);
        this.calpfandHra();
    },
    calpfandHra(){
        this.pf =(this.salary * 14) / 100;
        this.pf = parseInt(this.pf);

        this.hra =(this.salary * 25) / 100;
        this.hra = parseInt(this.hra);

    },
    calTax(){
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
    display(){
        clearvalue();
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
    document.querySelector("#eage").value = "";
    document.querySelector("#salary").value = "";
  };