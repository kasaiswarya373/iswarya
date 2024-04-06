var employeeData = {
    readempdata() {
        this.name = document.querySelector("#empname").value;
        this.age = document.querySelector("#fage").Value;
        this.gender = document.querySelector("#input[name=gender]:checked").Value;
        this.salary = document.querySelector("#empsal").Value;
        this.salary = parseInt(this.salary);
        this.calculatepfhra();

    },
}

calculatepfhra() {
    this.pf = (this.salary*12)/100;
    this.pf = parseInt(this.pf);
    this.hra = (this.salary*24)/100;
    this.hra = parseInt(this.hra);
    this.totalsal = this.salary + this.pf + this.hra;
    this.totalsal = parseInt(this.totalsal);
    this.calculateTax();


}
calculateTax() {
    if(this.salary>=250000) {
        this.taxpercent = 12;
    }
    else if(this.salary>40000) {
        this.percent = 6;
    }
    else {
        this.taxpercent = 0 ;
    
    }
    this.taxamount = (this.totalsal*this.taxpercent)/100;
    this.taxamount = parseInt(this.taxamount);
    this.totalsal = this.totalsal - this.taxamount;
    this.totalsal = parseInt(this.totalsal);
    this.display();

},
display () {
    clearvalues();
    Document.querySelector(".newcontainer").style.display = 'block';
    document.querySelector("#name").innerText = this.name;
    document.querySelector("#age").innerText = this.age;
    document.querySelector("#gender").innerText = this.gender;
    document.querySelector("#sal").innerText = this.salary;
    document.querySelector("#pf").innerText = this.pf;
    document.querySelector("#hra").innerText = this.hra;
    document.querySelector("#tax").innerText = this.taxamount;
    document.querySelector("#totalsal").innerText = this.totalsal;

}

};
var displaydetails = () => {
    employeeData.readempdata();
}
var clearvalues = () => {
    document.querySelector("#empname").value = "";
    document.querySelector("fage").value = "";
    document.querySelector("#empsal").value = "";
}