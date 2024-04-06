var empDetails = {
    // JSON Object

    readEmpDetails () {
        empDetails.name = document.querySelector("#ename").value;
        empDetails.age = document.querySelector("#eage").value;
        empDetails.gender = document.querySelector("input[name=gender]:checked").value;
        empDetails.dept = document.querySelector("#edept").value;
        empDetails.basicSal = parseInt(document.querySelector("#ebasicSal").value); //parseInt necessary since input type is text

        this.getTotalSal();
        this.displayEmpData();

    },

    getTotalSal() {
        this.pf = (this.basicSal * 14) / 100;
        this.hra = (this.basicSal * 24) / 100;
        this.totalSal = this.basicSal + this.pf + this.hra;
        this.getTax();
    },

    getTax() {
        if (this.gender == "Male"){
    
            if(this.totalSal>=100000){
                this.taxPercent = 15;
            }
            else if(this.totalSal>=50000){
                this.taxPercent = 10;
            }
            else if(this.totalSal>=30000){
                this.taxPercent = 5;
            }
       }
        else { // empGender == Female

            if (this.totalSal>=100000){
                this.taxPercent = 10;
            }
            else if (this.totalSal>=50000){
                this.taxPercent = 5;
            }
        }

        this.taxTobePaid = this.totalSal * (this.taxPercent/100); 
    },

    displayEmpData () {
        /*
        console.log("Name is: "+this.name);
        console.log("AGe is: "+this.age);
        console.log("Gender is: "+this.gender);
        console.log("Department is: "+this.dept);
        console.log("Basic Salary is: "+this.basicSal);
        console.log("PF is: "+this.pf);
        console.log("HRA is: "+this.hra);
        console.log("Total Salary is: "+this.totalSal);
        console.log("Tax is: "+this.taxTobePaid);
        */

        document.querySelector("#dEname").innerHTML = this.name;
        document.querySelector("#dEage").innerHTML = this.age;
        document.querySelector("#dEgender").innerHTML = this.gender;
        document.querySelector("#dEdept").innerHTML = this.dept;
        document.querySelector("#dEpf").innerHTML = this.pf;
        document.querySelector("#dEhra").innerHTML = this.hra;
        document.querySelector("#dEtoalSal").innerHTML = this.totalSal;
        document.querySelector("#dEtax").innerHTML = this.taxTobePaid;

        // displaying pay slip after onclick 
        document.querySelector(".dispalyDetailsBlock").style.display = 'block';
    }
};

var read_EmpData = () => {
    console.log(empDetails);
    empDetails.readEmpDetails();
}








