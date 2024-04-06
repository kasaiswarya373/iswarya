class EmpData{
    constructor(edata){
        this.name = edata.name;
        this.age = edata.age;
        this.gender = edata.gender;
        this.dept = edata.dept;
        this.basicSal = edata.basicSal; 
    }

    getTotalSal() {
        this.pf = (this.basicSal * 14) / 100;
        this.hra = (this.basicSal * 24) / 100;
        this.totalSal = this.basicSal + this.pf + this.hra;
        this.getTax();
    }

    getTax() {
        this.taxTobePaid = 0;
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

    displayEmpData() {

        this.getTotalSal();
        this.getTax();

        $("#dEname").text(this.name);
        $("#dEage").text(this.age);
        $("#dEgender").text(this.gender);
        $("#dEdept").text(this.dept);
        $("#dEpf").text(this.pf);
        $("#dEhra").text(this.hra);
        $("#dEtoalSal").text(this.totalSal);
        $("#dEtax").text(this.taxTobePaid);
 
        $(".dispalyDetailsBlock").show(1000);
    }
}

var read_EmpData = () => {

    var empDetails = {};
    empDetails.name = $("#ename").val();
    empDetails.age = $("#eage").val();
    empDetails.gender = $("input[name=gender]:checked").val();
    empDetails.dept = $("#edept").val();
    empDetails.basicSal = parseInt($("#ebasicSal").val()); //parseInt necessary since input type is string

    var e1 = new EmpData(empDetails);
    e1.displayEmpData();

}

var resetFields = () => {
    $("#ename").val('');
    $("#eage").val('');
    $("#edept").val('select_dept');
    $("#ebasicSal").val('');
    $(".dispalyDetailsBlock").hide(1000);
}








