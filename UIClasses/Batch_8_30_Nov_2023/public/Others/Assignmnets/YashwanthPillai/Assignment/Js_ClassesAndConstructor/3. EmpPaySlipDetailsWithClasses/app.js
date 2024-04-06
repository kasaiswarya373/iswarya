class paySlip {
  constructor(obj) {
    this.ename = obj.ename;
    this.eid = obj.eid;
    this.eage = obj.eage;
    this.egender = obj.egender;
    this.edept = obj.edept;
    this.ebasicsal = obj.ebasicsal;
    this.emonth = obj.emonth;

    this.getPf();
  }
  getPf() {
    this.PF = parseInt((15 * this.ebasicsal) / 100);

    this.getHra();
  }

  getHra() {
    this.HRA = parseInt((10 * this.ebasicsal) / 100);

    this.getTax();
  }
  getTax() {
    if (this.egender == "Male") {
      if (this.ebasicsal >= 250000) {
        this.Tax = parseInt((18 * this.ebasicsal) / 100);
      } else if (this.ebasicsal >= 200000) {
        this.Tax = parseInt((15 * this.ebasicsal) / 100);
      } else if (this.ebasicsal >= 150000) {
        this.Tax = parseInt((10 * this.ebasicsal) / 100);
      } else if (this.ebasicsal >= 150000) {
        this.Tax = parseInt((5 * this.ebasicsal) / 100);
      } else {
        this.Tax = 0;
      }
    } else {
      if (this.ebasicsal >= 250000) {
        this.Tax = parseInt((15 * this.ebasicsal) / 100);
      } else if (this.ebasicsal >= 200000) {
        this.Tax = parseInt((10 * this.ebasicsal) / 100);
      } else if (this.ebasicsal >= 150000) {
        this.Tax = parseInt((5 * this.ebasicsal) / 100);
      } else {
        this.Tax = 0;
      }
    }

    this.getTotalSal();
  }

  getTotalSal() {
    this.TotalSalary = parseInt(this.ebasicsal + this.PF + this.HRA - this.Tax);

    this.displayPaySlip();
  }

  displayPaySlip() {
    document.querySelector(".display-container").style.display = "block";

    document.querySelector(".DE_name").innerText = this.ename;
    document.querySelector(".DE_id").innerText = this.eid;
    document.querySelector(".DE_age").innerText = this.eage;
    document.querySelector(".DE_gender").innerText = this.egender;
    document.querySelector(".DE_dept").innerText = this.edept;
    document.querySelector(".DE_bs").innerText = this.ebasicsal;
    document.querySelector(".DE_pf").innerText = this.PF;
    document.querySelector(".DE_hra").innerText = this.HRA;
    document.querySelector(".DE_tax").innerText = this.Tax;
    document.querySelector(".DE_ts").innerText = this.TotalSalary;
    document.querySelector(".DE_date").innerText = this.emonth;
  }
}
var paySlipList = [];

var empInfo = () => {
  var empInput = {};
  empInput.ename = document.querySelector("#Ename").value;
  empInput.eid = document.querySelector("#Eid").value;
  empInput.eage = document.querySelector("#Eage").value;
  empInput.egender = document.querySelector(
    "input[name=egender]:checked"
  ).value;
  empInput.edept = document.querySelector("#Edept").value;
  empInput.ebasicsal = parseInt(document.querySelector("#Ebasicsal").value);
  empInput.emonth = document.querySelector("#Emonth").value;

  var emp = new paySlip(empInput);
  emp.displayPaySlip();

  paySlipList.push(JSON.parse(JSON.stringify(emp)));

  resetFields();
};
//

// var generatePaySlip = () => {
//   this.empInfo();var showAllPaySlip = () =>{
//     var paySlipList = [];
//     var emp = new paySlip(empInput)
//     emp.displayPaySlip()

//     paySlipList.push(JSON.parse(JSON.stringify(emp)));

//   }
// paySlipList.push(JSON.parse(JSON.stringify(empPaySlip)));

// };

var resetFields = () => {
  document.querySelector("#Ename").value = "";
  document.querySelector("#Eid").value = "";
  document.querySelector("#Eage").value = "";
  document.querySelector("input[name=egender]:checked").value = "";
  document.querySelector("#Edept").value = "";
  document.querySelector("#Ebasicsal").value = "";
  document.querySelector("#Emonth").value = "";
};

console.log(paySlipList);

