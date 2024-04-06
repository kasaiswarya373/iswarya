var empdetails = () => {
                var empDetails = {};
                empDetails.fname = document.querySelector('#fname').value;
                empDetails.sname = document.querySelector('#sname').value;
                empDetails.age = document.querySelector('#age').value;
                empDetails.gender = document.querySelector('input[name = gender]:checked').value;
                //empDetails.department = document.querySelector('select[name=department]:selected').value;
                empDetails.basicsalary = parseInt(document.querySelector('#basicsalary').value);
                empDetails.pf = parseInt(document.querySelector('#pf').value);
                empDetails.hra = parseInt(document.querySelector('#hra').value);
                empDetails.pfamount = (empDetails.basicsalary * empDetails.pf) / 100;
                empDetails.hraamount = (empDetails.basicsalary * empDetails.hra) / 100;


                empDetails.totalsal = empDetails.basicsalary + empDetails.pfamount + empDetails.hraamount;


                if (empDetails.gender == 'male')  {
                    if(empDetails.totalsal >= 200000) {
                        empDetails.tax = 15;
                    }else if(empDetails.totalsal >= 100000) {
                        empDetails.tax = 10;
                    }else if(empDetails.totalsal >=50000) {
                        empDetails.tax = 5;
                    }else {
                        empDetails.tax = 0;
                    }
                }else {
                    if(empDetails.totalsal >= 200000){
                        empDetails.tax = 10;
                    }else  if(empDetails.totalsal >= 100000){
                        empDetails.tax = 5;
                    }else  if(empDetails.totalsal >= 50000){
                        empDetails.tax = 0;
                    }
                }

                empDetails.taxamount = (empDetails.totalsal * empDetails.tax) / 100;

                empDetails.taxreductionAmount = empDetails.totalsal - empDetails.taxamount;

                document.querySelector('span').innerHTML=empDetails.taxreductionAmount;
                
            }