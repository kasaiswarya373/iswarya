var employeeDetailsList = [];
var employeeData = {
    readEmpData() {
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
        this.displayInfo();
    },
    displayInfo() {
        clearvalues();

        employeeDetailsList.push(JSON.parse(JSON.stringify(employeeData)));

        var maindivtag = document.createElement("div");
        maindivtag.setAttribute("class","empdetailsList")
        var div1 = document.createElement("div");
        div1.setAttribute("class","emname");
        var b1 = document.createElement("b");
        b1.innerText = "Employee-Name : ";
        div1.append(b1);
        var s1 = document.createElement("span");
        s1.innerText = this.name;
        div1.append(s1);
        maindivtag.append(div1);

        var div2 = document.createElement("div");
        div2.setAttribute("class","emname");
        var b2 = document.createElement("b");
        b2.innerText = "Employee-Age : ";
        div2.append(b2);
        var s2 = document.createElement("span");
        s2.innerText = this.age;
        div2.append(s2);
        maindivtag.append(div2);

        var div3 = document.createElement("div");
        div3.setAttribute("class","emname");
        var b3 = document.createElement("b");
        b3.innerText = "Employee-Gender : ";
        div3.append(b3);
        var s3 = document.createElement("span");
        s3.innerText = this.gender;
        div3.append(s3);
        maindivtag.append(div3);

        var div4 = document.createElement("div");
        div4.setAttribute("class","emname");
        var b4 = document.createElement("b");
        b4.innerText = "Employee-BasicSal: ";
        div4.append(b4);
        var s4 = document.createElement("span");
        s4.innerText = this.salary;
        div4.append(s4);
        maindivtag.append(div4);

        var div5 = document.createElement("div");
        div5.setAttribute("class","emname");
        var b5 = document.createElement("b");
        b5.innerText = "Employee-Pf : ";
        div5.append(b5);
        var s5 = document.createElement("span");
        s5.innerText = this.pf;
        div5.append(s5);
        maindivtag.append(div5);

        var div6 = document.createElement("div");
        div6.setAttribute("class","emname");
        var b6 = document.createElement("b");
        b6.innerText = "Employee-HRA : ";
        div6.append(b6);
        var s6 = document.createElement("span");
        s6.innerText = this.hra;
        div6.append(s6);
        maindivtag.append(div6);

        var div7 = document.createElement("div");
        div7.setAttribute("class","emname");
        var b7 = document.createElement("b");
        b7.innerText = "Employee-TotalSal : ";
        div7.append(b7);
        var s7 = document.createElement("span");
        s7.innerText = this.totalsal;
        div7.append(s7);
        maindivtag.append(div7);
        document.querySelector(".detailsList").append(maindivtag);

    }
};
var displaydetails = () => {
    employeeData.readEmpData();
}
var clearvalues = () => {
    document.querySelector("#empname").value = "";
    document.querySelector("#fage").value = "";
    document.querySelector("#empsal").value ="";
}
console.log(employeeDetailsList);