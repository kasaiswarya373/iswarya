var empDetail = {}
var allEmpDetail = [];
function register(){
empDetail.Name = document.getElementById('empName').value;
empDetail.Age = document.getElementById('empAge').value;
empDetail.Gender = document.querySelector('input[name=Gender]:checked').value;
empDetail.Country = document.getElementById('empContry').value
allEmpDetail.push(JSON.parse(JSON.stringify(empDetail)));
console.log(allEmpDetail);
showdetail();
document.getElementById('empName').value = "";
document.getElementById('empAge').value = "";
document.getElementById('empContry').value ="";
}
function showdetail(){
    document.querySelector("tbody").innerHTML = "";
    var count = 0;
    for(var emp of allEmpDetail){
        var tr = document.createElement('tr');
        var td_sr = document.createElement('td');
        var td_name = document.createElement('td');
        var td_age = document.createElement('td');
        var td_gender = document.createElement('td');
        var td_country = document.createElement('td');
        var td_del = document.createElement('td');
        var td_edit = document.createElement('td');
        var eName = emp.Name;
        td_sr.innerHTML = ++count ;
        td_name.innerHTML = emp.Name;
        td_age.innerHTML = emp.Age;
        td_gender.innerHTML = emp.Gender;
        td_country.innerHTML = emp.Country;
        td_del.innerHTML = `<input type ="button" value ="Delete" onclick = "del(this.name)" name = ${emp.Name}>`
        td_edit.innerHTML = `<input type ="button" value = "Edit" onclick = "editDetail(this.name)" name = ${emp.Name}>`
        tr.appendChild(td_sr);
        tr.appendChild(td_name);
        tr.appendChild(td_age);
        tr.appendChild(td_gender);
        tr.appendChild(td_country);
        tr.appendChild(td_del);
        tr.appendChild(td_edit);
        document.querySelector("tbody").appendChild(tr);

    }
        
}
function del(name){
    var result = allEmpDetail.find((item)=>{
        return item.Name == name;
    })
    var numindex = allEmpDetail.indexOf(result);
    allEmpDetail.splice(numindex,1);
    console.log(allEmpDetail);
    showdetail();

}
function editDetail(name){
    var result = allEmpDetail.find((item)=>{
        return item.Name == name;
    })
    var numindex = allEmpDetail.indexOf(result);
    document.getElementById('empName').value = result.Name;
    document.getElementById('empAge').value = result.Age
    document.getElementById('empContry').value = result.Country;
    console.log(result.Name);
    chng(numindex,result);
}
function chng(num ,result){
    document.querySelector("input[value='Register']").setAttribute("class","disnone");
    var savebtn = document.createElement('button');
    savebtn.innerHTML = "Save";
    savebtn.setAttribute('class','btnpos');
    var li = document.createElement("li");
    li.appendChild(savebtn);
    document.getElementById('regdetail').appendChild(li);
    savebtn.addEventListener('click',function(){
        empDetail.Name = document.getElementById('empName').value;
        empDetail.Age = document.getElementById('empAge').value;
        empDetail.Gender = document.querySelector('input[name=Gender]:checked').value;
        empDetail.Country = document.getElementById('empContry').value
        allEmpDetail.splice(num,1);
        allEmpDetail.splice(num,0,empDetail)
        console.log(allEmpDetail);
        showdetail()
        document.querySelector("input[value='Register']").setAttribute("class","disblock");
        savebtn.setAttribute('class','disnone');
    
    })
    
}
