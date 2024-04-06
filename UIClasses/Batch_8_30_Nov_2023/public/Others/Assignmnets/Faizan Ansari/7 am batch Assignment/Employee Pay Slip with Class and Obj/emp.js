class empClass {

    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.dept = data.dept;
        this.basicSal = data.basicSal;
    }

    getTotalSal() {
        this.pf = (this.basicSal * 14) / 100;
        this.hra = (this.basicSal * 24) / 100;
        this.totalSal = this.basicSal + this.pf + this.hra;
    }

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
    }

    displayEmpData () {

        this.getTotalSal();
        this.getTax();

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
}

var empDetails_List = [];
var readEmpDetails = () =>{
    var Edata = {};

    Edata.name = document.querySelector("#ename").value;
    Edata.age = document.querySelector("#eage").value;
    Edata.gender = document.querySelector("input[name=gender]:checked").value;
    Edata.dept = document.querySelector("#edept").value;
    Edata.basicSal = parseInt(document.querySelector("#ebasicSal").value);
    
    var e1 = new empClass(Edata);
    e1.displayEmpData();

    empDetails_List.push(e1);
    console.log(empDetails_List);

}



