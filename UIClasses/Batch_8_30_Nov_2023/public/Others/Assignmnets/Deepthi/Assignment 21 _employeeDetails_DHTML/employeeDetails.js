var employeeDetailsList = [];

var eData = {
    readEmployeeDetails() {

        eData.name = document.querySelector("#ename").value;
        eData.age = document.querySelector("#eage").value;
        eData.gender = document.querySelector("input[name=gender]:checked").value;
        eData.department = document.querySelector("#edept").value;
        eData.basicsalary = parseInt(document.querySelector("#basicsal").value);
    
        eData.getPfHraAndTotalSalary();
        // console.log(this);
            
    },
    getTotalTax()  {

        if (eData.gender == 'Male') {
            if (eData.totalsalary >= 200000) {
                eData.taxpercent = (eData.totalsalary * 15) / 100;
                eData.netsalary = eData.totalsalary - eData.taxpercent;
            }
            else if (eData.totalsalary >= 100000) {
                eData.taxpercent = (eData.totalsalary * 10) / 100;
                eData.netsalary = eData.totalsalary - eData.taxpercent;
             }
            else if (eData.totalsalary >= 50000) {
                eData.taxpercent = (eData.totalsalary * 5) / 100;
                eData.netsalary = eData.totalsalary - eData.taxpercent;
            
            }
            else {
                eData.taxpercent = eData.totalsalary;
                eData.netsalary = eData.totalsalary;
            
            }

        }
        else {
            if (eData.totalsalary >= 200000) {
                eData.taxpercent = (eData.totalsalary * 10) / 100;
                eData.netsalary = eData.totalsalary - eData.taxpercent;
                
            }
            else if (eData.totalsalary >= 100000) {
                eData.taxpercent = (eData.totalsalary * 5) / 100;
                eData.netsalary = eData.totalsalary - eData.taxpercent;
            
            }
            else {
                eData.taxpercent = eData.totalsalary;
                eData.netsalary = eData.totalsalary;
            }

        }
        this.displayDetails();
    },

    displayDetails() {
       
        var ulTag = document.createElement("ul");
        var liTag = document.createElement("li");
        liTag.innerText = `Employee Name : ` +this.name;
        ulTag.append(liTag);

        var liTag2 = document.createElement("li");
        liTag2.innerText = `Net salary : ` +this.age;
        ulTag.append(liTag2);

        var liTag3 = document.createElement("li");
        liTag3.innerText = `Net salary : ` +this.gender;
        ulTag.append(liTag3);

        var liTag4 = document.createElement("li");
        liTag4.innerText = `Employee Gender : ` +this.department;
        ulTag.append(liTag4);

        var liTag5 = document.createElement("li");
        liTag5.innerText = `Basic salary : ` +this.basicsalary;
        ulTag.append(liTag5);

        var liTag6 = document.createElement("li");
        liTag6.innerText = `PF : ` +this.pf;
        ulTag.append(liTag6);

        var liTag7 = document.createElement("li");
        liTag7.innerText = `HRA : ` +this.hra;
        ulTag.append(liTag7);

        var liTag8 = document.createElement("li");
        liTag8.innerText = `Total : ` +this.totalsalary;
        ulTag.append(liTag8);

        var liTag9 = document.createElement("li");
        liTag9.innerText = `Tax Percent : ` +this.taxpercent;
        ulTag.append(liTag9);

        var liTag10 = document.createElement("li");
        liTag10.innerText = `Net salary : ` +this.netsalary;
        ulTag.append(liTag10);

        document.querySelector(".empDetails").append(ulTag);

        employeeDetailsList.push(JSON.parse(JSON.stringify(eData)));
        console.log(employeeDetailsList);
    }

};

eData.getPfHraAndTotalSalary = () => {
    eData.pf = (eData.basicsalary) * 14/100;
    eData.hra = (eData.basicsalary) * 25/100;
    eData.totalsalary = eData.basicsalary + eData.hra + eData.pf;
    eData.getTotalTax();
}

var generateEmployeeDetails = () => {
    eData.readEmployeeDetails();
}

var resetFields = () => {

        document.querySelector("#ename").value = ' ';
        document.querySelector("#eage").value = ' ';
        document.querySelector("#edept").value = ' ';
        document.querySelector("#basicsal").value = ' ';

}