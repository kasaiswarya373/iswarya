var detail = [];
var showcountry =()=>{
    document.getElementById('distict').innerHTML ="";
    document.getElementById('state').innerHTML = '';
    document.getElementById('country').innerText ="";
    var optTag = document.createElement('option');
    optTag.innerText = "Select Country";
    optTag.disabled = true;
    optTag.defaultSelected = true;
    document.getElementById('country').append(optTag);
    fetch("dta.json").then((response)=>response.json()).then((data) =>{
        detail.push(data);
        for(var newitem in data){
            var opt = document.createElement('option');
            opt.text = data[newitem].C_code;
            opt.value = data[newitem].countryName; 
            document.getElementById('country').append(opt);
        }    
    })
    return detail;
}
var check = ()=>{
    showcountry()
}
var showState = (value) => {
    document.getElementById('state').innerHTML = '';
    document.getElementById('distict').innerHTML ="";
    var optTag = document.createElement('option');
    optTag.innerText = "Select State"
    optTag.disabled = true;
    optTag.defaultSelected = true;
    document.getElementById('state').append(optTag);
    console.log(value);
    var selcount = value ;
    fetch("dta.json").then((response)=>response.json()).then((data) =>{
          var state = data[selcount].statesInfo;
          for(var sname of state){
            var stname = document.createElement('option')
            stname.text = sname.name.toUpperCase();
            stname.value = sname.name;
            document.getElementById('state').append(stname);
          }
       })
}
var showdist = (dist)=>{
    var optTag = document.createElement('option');
    optTag.innerText = "Select District"
    optTag.disabled = true;
    optTag.defaultSelected = true;
    document.getElementById('distict').append(optTag);
    var selcon = document.getElementById('country').value;
    fetch("dta.json").then((response)=>response.json()).then((data) =>{
        var prox = data[selcon].statesInfo
        var result = prox.find(function(item){
            return item.name == dist;
        })
        for(var stn of result.districtInfo){
            var dtname = document.createElement('option')
            dtname.text = stn.name.toUpperCase();
            dtname.value = stn.name;
            document.getElementById('distict').append(dtname);
        }
    })
}
var checkuserinput = ()=>{
    document.getElementById('errormsg').innerText = "";
    var num = event.keyCode
    if(num >=65 && num <=90 || num >=97 && num <= 122){

    }else{
        return false;
    }
}
var checkuserage = ()=>{
    document.getElementById('errormsg').innerText = "";
    var num = event.keyCode
    if(num >=49 && num <=57){

    }else{
        return false;
    }
}
var userRegister = () =>{
    var usenam = document.getElementById("u_name").value;
    var useage = document.getElementById('u_age').value;
    if(usenam == "" || useage == ""){
        document.getElementById('detailcont').style.display = "none"
        document.getElementById('errormsg').innerText = "Please fill the name and age"
    }else{
        document.getElementById('detailcont').style.display = "block";
    }
    var usecontry = document.getElementById('country').value;
    var usestate = document.getElementById('state').value;
    var usedist= document.getElementById('distict').value;
    document.querySelector("#ur_name").innerHTML = usenam.toUpperCase();
    document.querySelector("#ur_age").innerHTML = useage + "yr";
    (usecontry != "Select Country") ?  document.getElementById('ur_country').innerHTML = usecontry.toUpperCase() :document.getElementById('ur_country').innerHTML = "";
    (usestate != "Select State") ?  document.getElementById('ur_state').innerHTML = usestate.toUpperCase() :document.getElementById('ur_state').innerHTML = "";
    (usedist != "Select District") ?  document.getElementById('ur_dist').innerHTML = usedist.toUpperCase() :document.getElementById('ur_dist').innerHTML = "";
    emptydetail();
}
var emptydetail =()=>{
    document.querySelector("input[type=text]").value ="";
    document.querySelector("#u_age").value ="";
    showcountry()
    document.getElementById('state').value ="";
    document.getElementById('distict').value ="";
}