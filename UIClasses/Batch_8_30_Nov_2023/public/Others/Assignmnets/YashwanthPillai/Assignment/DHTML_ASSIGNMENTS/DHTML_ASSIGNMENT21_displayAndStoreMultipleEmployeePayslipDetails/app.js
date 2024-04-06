
var paySlipList = [];

var empPaySlip = {
  empInfo() {
    empPaySlip.ename = document.querySelector("#Ename").value;
    empPaySlip.eid = document.querySelector("#Eid").value;
    empPaySlip.eage = document.querySelector("#Eage").value;
    empPaySlip.egender = document.querySelector(
      "input[name=egender]:checked"
    ).value;
    empPaySlip.edept = document.querySelector("#Edept").value;
    empPaySlip.ebasicsal = parseInt(document.querySelector("#Ebasicsal").value);
    empPaySlip.emonth = document.querySelector("#Emonth").value;

    empPaySlip.getPf();
    empPaySlip.getHra();
    empPaySlip.getTax();
    empPaySlip.getTotalSal();
    empPaySlip.displayPaySlip();
  },

  getPf() {
    empPaySlip.PF = parseInt((15 * empPaySlip.ebasicsal) / 100);
  },

  getHra() {
    empPaySlip.HRA = parseInt((10 * empPaySlip.ebasicsal) / 100);
  },

  getTax() {
    if (empPaySlip.egender == "Male") {
      if (empPaySlip.ebasicsal >= 250000) {
        empPaySlip.Tax = parseInt((18 * empPaySlip.ebasicsal) / 100);
      } else if (empPaySlip.ebasicsal >= 200000) {
        empPaySlip.Tax = parseInt((15 * empPaySlip.ebasicsal) / 100);
      } else if (empPaySlip.ebasicsal >= 150000) {
        empPaySlip.Tax = parseInt((10 * empPaySlip.ebasicsal) / 100);
      } else if (empPaySlip.ebasicsal >= 150000) {
        empPaySlip.Tax = parseInt((5 * empPaySlip.ebasicsal) / 100);
      } else {
        empPaySlip.Tax = 0;
      }
    } else {
      if (empPaySlip.ebasicsal >= 250000) {
        empPaySlip.Tax = parseInt((15 * empPaySlip.ebasicsal) / 100);
      } else if (empPaySlip.ebasicsal >= 200000) {
        empPaySlip.Tax = parseInt((10 * empPaySlip.ebasicsal) / 100);
      } else if (empPaySlip.ebasicsal >= 150000) {
        empPaySlip.Tax = parseInt((5 * empPaySlip.ebasicsal) / 100);
      } else {
        empPaySlip.Tax = 0;
      }
    }
  },

  getTotalSal() {
    empPaySlip.TotalSalary =
      parseInt(empPaySlip.ebasicsal + empPaySlip.PF + empPaySlip.HRA - empPaySlip.Tax);
  },

  displayPaySlip() {
    document.querySelector(".display-container").style.display = "block";

    document.querySelector(".DE_name").innerText = empPaySlip.ename;
    document.querySelector(".DE_id").innerText = empPaySlip.eid;
    document.querySelector(".DE_age").innerText = empPaySlip.eage;
    document.querySelector(".DE_gender").innerText = empPaySlip.egender;
    document.querySelector(".DE_dept").innerText = empPaySlip.edept;
    document.querySelector(".DE_bs").innerText = empPaySlip.ebasicsal;
    document.querySelector(".DE_pf").innerText = empPaySlip.PF;
    document.querySelector(".DE_hra").innerText = empPaySlip.HRA;
    document.querySelector(".DE_tax").innerText = empPaySlip.Tax;
    document.querySelector(".DE_ts").innerText = empPaySlip.TotalSalary;
    document.querySelector(".DE_date").innerText = empPaySlip.emonth;
    resetFields();
  },
};

var generatePaySlip = () => {
  empPaySlip.empInfo();

  paySlipList.push(JSON.parse(JSON.stringify(empPaySlip)));

  
};

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


