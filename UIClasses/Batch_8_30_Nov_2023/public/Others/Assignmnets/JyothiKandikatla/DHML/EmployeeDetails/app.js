
    var empDetails = {
        empdetails () {
            
            empDetails.fname = document.querySelector('#fname').value;
            empDetails.lname = document.querySelector('#lname').value;
            empDetails.age = document.querySelector('#age').value;
            empDetails.gender = document.querySelector('input[name = gender]:checked').value;
            empDetails.deparment = document.querySelector('#empdepartment').value;
            empDetails.basicsalary =parseInt(document.querySelector('#basicsalary').value);
            empDetails.pf = parseInt(document.querySelector('#pf').value);
            empDetails.hra = parseInt(document.querySelector('#hra').value);
        empDetails.pfamount = (empDetails.basicsalary * empDetails.pf) / 100;
        empDetails.hraamount = (empDetails.basicsalary * empDetails.hra) / 100;
        empDetails.totalsal = empDetails.basicsalary + empDetails.pfamount + empDetails.hraamount;
        if( (empDetails.gender =='male') || (empDetails.gender =='m')){
            if(empDetails.totalsal >= 200000){
                empDetails.tax = 15;
            }else if(empDetails.totalsal >= 100000){
                empDetails.tax = 10;
            }else if(empDetails.totalsal >= 50000){
                empDetails.tax = 5;
            }else{
                empDetails.tax = 0;
            }
        }else{
            if(empDetails.totalsal >= 200000){
                empDetails.tax = 10;
            }else  if(empDetails.totalsal >= 100000){
                empDetails.tax = 5;
            }else  if(empDetails.totalsal >= 50000){
                empDetails.tax = 0;
            }
        }   
        empDetails.taxamount = (empDetails.totalsal * empDetails.tax ) / 100;
        empDetails.taxreductionAmount = empDetails.totalsal - empDetails.taxamount;
        empDetails.display ();
        } ,


 display () {
    document.querySelector(".displayBlock").style.display = 'block';
    document.querySelector('#d_name').innerHTML = this.fname +' '+ this.lname;
    document.querySelector('#d_age').innerHTML = this.age;
    document.querySelector('#d_gender').innerHTML = this.gender;
    document.querySelector('#d_department').innerHTML = this.deparment;
    document.querySelector('#d_basicsalary').innerHTML = this.basicsalary;
    document.querySelector('#d_pf').innerHTML = this.pf +'%' ;
    document.querySelector('#d_hra').innerHTML = this.hra +'%' ;
    document.querySelector('#d_totsalary').innerHTML = this.totalsal;
    document.querySelector('#d_tax').innerHTML = this.tax + '%';
    document.querySelector('#d_taxreduction').innerHTML = this.taxreductionAmount;








}
    }