var employeeData = {
    readempdata() {
        this.name = document.querySelector("#empname").value;
        this.age = document.querySelector("#fage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.salary = document.querySelector("#empsal").value;
        this.salary = parseInt(this.salary);
        this.calculatePfHra();
    },
    calculatePfHra() {
        this.pf = (this.salary*14)/100;
        this.pf = parseInt(this.pf);
        this.hra = (this.salary*25)/100;
        this.hra = parseInt(this.hra);
        this.totalsal = this.salary+this.pf+this.hra;
        this.totalsal = parseInt(this.totalsal);
        this.calculateTax();
    },
    calculateTax() {
        if(this.salary>=100000){
            this.taxPercent = 10;
        }
        else if(this.salary>50000){
            this.taxPercent = 5;
        }
        else{
            this.taxPercent = 0;
        }
        this.taxamt = (this.totalsal*this.taxPercent)/100;
        this.taxamt = parseInt(this.taxamt);
        this.totalsal = this.totalsal-this.taxamt;
        this.totalsal = parseInt(this.totalsal);
        this.display();
    },
    display() {
        clearvalues();
        document.querySelector(".newcontainer").style.display ='block';
        //document.querySelector(".em1name").style.display ='block';
        document.querySelector("#name").innerText = this.name;
        document.querySelector("#age").innerText = this.age;
        document.querySelector("#gender").innerText = this.gender;
        document.querySelector("#sal").innerText = this.salary;
        document.querySelector("#pf").innerText = this.pf;
        document.querySelector("#hra").innerText = this.hra;
        document.querySelector("#tax").innerText = this.taxamt;
        document.querySelector("#totalsal").innerText = this.totalsal;
    }
    
};
var displaydetails = () => {
    employeeData.readempdata();
}
var clearvalues = () => {
    document.querySelector("#empname").value = "";
    document.querySelector("#fage").value = "";
    document.querySelector("#empsal").value ="";
}