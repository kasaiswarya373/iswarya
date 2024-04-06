var empDetail = {};
var allempDetail = [];
function generateDetail(){
    empDetail.Name = document.getElementById('emp_name').value;
    empDetail.Age = parseInt(document.getElementById('emp_Age').value);
    empDetail.Gender = document.querySelector("input[type='radio']:checked").value;
    empDetail.Dept = document.getElementById('emp_dept').value;
    empDetail.bsSalary = parseInt(document.getElementById('emp_bsSalary').value);
   console.log(empDetail);
   createlem();
   eraseDetail();
}
function createlem(){
    // document.getElementById('shw_name').innerHTML = empDetail.Name;
    // document.getElementById('shw_age').innerHTML = empDetail.Age;
    // document.getElementById('shw_gender').innerHTML = empDetail.Gender;
    // document.getElementById('shw_class').innerHTML = empDetail.class;
    // markCal();
    // document.getElementById('shw_total').innerHTML = empDetail.total;
    var h2 = document.createElement('h2');
    h2.innerHTML = `${empDetail.Name} Pay Slip`
    var ul = document.createElement('ul');
    var n_li = document.createElement('li'); 
    n_li.innerHTML = `<label> Employee Name </label> ${empDetail.Name}`; 
    var a_li = document.createElement('li');
    a_li.innerHTML = `<label > Age</label> ${empDetail.Age}`;
    var g_li = document.createElement('li');
    g_li.innerHTML = `<label> Gender</label> ${empDetail.Gender}`;
    var d_li = document.createElement('li');
    d_li.innerHTML = `<label >Department</label> ${empDetail.Dept}`;
    var bsal_li = document.createElement('li');
    bsal_li.innerHTML = `<label >Basic Salary</label> &#8377; ${empDetail.bsSalary}`;
    calempSal();
    var pf_li = document.createElement('li');
    pf_li.innerHTML = `<label>PF Contribution</label> &#8377; ${empDetail.pf}`;
    var hra_li = document.createElement('li');
    hra_li.innerHTML = `<label>HRA</label> &#8377; ${empDetail.hra}`;
    var tax_li = document.createElement('li');
    tax_li.innerHTML = `<label>Total Tax Deducted</label> &#8377; ${empDetail.taxDeduct}`;
    var inSal_li = document.createElement('li');
    inSal_li.innerHTML = `<label>Total In Hand Salary</label> &#8377; ${empDetail.inHandSalary}`;
  
    ul.appendChild(h2);
    ul.appendChild(n_li);
    ul.appendChild(a_li);
    ul.appendChild(g_li);
    ul.appendChild(d_li);
    ul.appendChild(bsal_li);
    ul.appendChild(pf_li);
    ul.appendChild(hra_li);
    ul.appendChild(tax_li);
    ul.appendChild(inSal_li);
    document.getElementById('detailshowCont').appendChild(ul);
    allempDetail.push(JSON.parse(JSON.stringify(empDetail)));
    console.log(allempDetail);
   
}
function calempSal(){
    empDetail.pf = (empDetail.bsSalary*15)/100;
    empDetail.hra = (empDetail.bsSalary*25)/100;
    empDetail.totalSal = empDetail.bsSalary + empDetail.pf + empDetail.hra;
    if(empDetail.Gender == "Male"){
        empDetail.taxDeduct = (empDetail.totalSal*15)/100; 
    }else if(empDetail.Gender == "Female"){
        empDetail.taxDeduct = (empDetail.totalSal*10)/100; 
    }
    empDetail.inHandSalary = (empDetail.totalSal - empDetail.taxDeduct);
} 

function eraseDetail(){
    document.getElementById('emp_name').value = "";
   document.getElementById('emp_Age').value = "";
   document.getElementById('emp_dept').value ="";
   document.getElementById('emp_bsSalary').value = "";
 
}