var emparr = [];
var emp = {

readValues(){
    emp.name = document.querySelector('#name').value;
    emp.age =  document.querySelector('#age').value;
    emp.gender =document.querySelector("input[name=gender]:checked").value;
    emp.loc = document.querySelector('#loc').value;
    emp.country =  document.querySelector("#dbcount").value;
},
reset(){
    document.querySelector('#name').value = '' ;
    document.querySelector('#age').value = '';
    document.querySelector('#loc').value = '';
    document.querySelector('#btnSave').style.display = 'none';

},
tablefun(){
    emp.tr1 =document.createElement('tr');
    emp.th1 = document.createElement('th');
    emp.th1.innerText = 'Name';
    emp.tr1.append(emp.th1);
    emp.th2 = document.createElement('th');
    emp.th2.innerText = 'Age';
    emp.tr1.append(emp.th2);
    emp.th3 = document.createElement('th');
    emp.th3.innerText = 'Gender';
    emp.tr1.append(emp.th3);
    emp.th4 = document.createElement('th');
    emp.th4.innerText = 'Loc';
    emp.tr1.append(emp.th4);
    emp.th4 = document.createElement('th');
    emp.th4.innerText = 'Country';
    emp.tr1.append(emp.th4);
    emp.th5 = document.createElement('th');
    emp.th5.innerText = 'Actions';
    emp.th5.setAttribute('colspan','2');
    emp.th5.setAttribute('textalign','center');
    emp.tr1.append(emp.th5); 
    document.getElementById('temp').append(emp.tr1);
},
 submit(){
    emp.readValues();
    emp.tr2 =document.createElement('tr');
    emp.td1 =document.createElement('td');
    var i = 1;
    emp.tr2.setAttribute('id','m'+i);
    emp.td1.innerText = emp.name;
    emp.td1.setAttribute('id','_name')
    emp.tr2.append(emp.td1);
    emp.td2 =document.createElement('td');
    emp.td2.innerText = emp.age;
    emp.td2.setAttribute('id','_age')
    emp.tr2.append(emp.td2);
    emp.td3 =document.createElement('td');
    emp.td3.innerText = emp.gender;
    emp.td3.setAttribute('id','_gender')
    emp.tr2.append(emp.td3);
    emp.td4 =document.createElement('td');
    emp.td4.innerText = emp.loc;
    emp.td4.setAttribute('id','_loc')
    emp.tr2.append(emp.td4);
    emp.td5 =document.createElement('td');
    emp.td5.innerText = emp.country;
    emp.td5.setAttribute('id','_country')
    emp.tr2.append(emp.td5);
    emp.td6 =document.createElement('td');
    emp.td6.setAttribute('class','del');
    emp.btn1 = document.createElement('input');
    emp.btn1.setAttribute('type','button');
    emp.btn1.setAttribute('id','btdel');
    emp.btn1.setAttribute('value','delete');
    //emp.btn1.setAttribute('onclick','emp.delete(event)');
    emp.td6.append(emp.btn1);
    emp.btn2 = document.createElement('input');
    emp.btn2.setAttribute('type','button');
    emp.btn2.setAttribute('id','btedit');
    emp.btn2.setAttribute('value','Edit');
   

    emp.td6.append(emp.btn2);
    emp.tr2.setAttribute('id','m1')
    emp.tr2.append(emp.td6);
    document.getElementById('temp').append(emp.tr2);
    i++;
    emp.btn1.addEventListener('click',(event) =>{
        document.querySelector('#m'+i).remove();
       console.log(event);
    });


    

 }


};
emp.tablefun();