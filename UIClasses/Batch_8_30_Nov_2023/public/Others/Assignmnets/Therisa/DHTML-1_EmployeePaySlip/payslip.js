var readData = {
    empData() {
        this.name = document.querySelector("#Ename").value;
        this.age = document.querySelector("#age").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.department = document.querySelector("#dep").value;
        this.basicsalary = document.querySelector("#basicsal").value;
        this.basicsalary = parseInt(this.basicsalary);
        this.getPfHra();
    },
    getPfHra() {
        this.pf = (this.basicsalary * 14)/100;
        this.pf = parseInt(this.pf);
        this.hra = (this.basicsalary * 25)/100;  
        this.hra = parseInt(this.hra); 
        this.calTotalSal();
    },
    calTotalSal() {
        this.totalSal = this.basicsalary + this.pf + this.hra;
        this.totalSal = parseInt(this.totalSal);
        this.calTax();
    },
    calTax() {
        if(this.basicsalary >= 100000){
            this.taxpercentage = 10;
        } else if(this.basicsalary > 50000){
            this.taxpercentage = 5;
        } else {
            this.taxpercentage = 0;
        }
        this.tax = (this.basicsalary * this.taxpercentage)/100;
        this.tax = parseInt(this.taxpercentage);
        this.totalSal = this.totalSal - this.taxpercentage;
        this.totalSal = parseInt(this.totalSal);
        this.display();
    },
    display() {
        reset();
        document.querySelector(".displayDetails").style.display = 'block';
        document.querySelector("#d_name").innerText = this.name ;
        document.querySelector("#d_age").innerText = this.age ;
        document.querySelector("#d_gender").innerText = this.gender ;
        document.querySelector("#d_department").innerText = this.department ;
        document.querySelector("#d_basicsal").innerText = this.basicsalary ;
        document.querySelector("#d_pf").innerText = this.pf ;
        document.querySelector("#d_hra").innerText = this.hra ;
        document.querySelector("#d_tax").innerText = this.tax ;
        document.querySelector("#d_totalsalary").innerText = this.totalSal ;
    }
};
var displayDetails = () => {
    readData.empData();
};
var reset = () => {
    document.querySelector("#Ename").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#basicsal").value = "";
};