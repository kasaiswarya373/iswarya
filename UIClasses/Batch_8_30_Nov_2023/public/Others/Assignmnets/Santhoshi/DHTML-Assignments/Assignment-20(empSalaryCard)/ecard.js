var readinfo =  {
     empdata () {
    readinfo.name = document.querySelector("#ename").value;
    readinfo.age = document.querySelector("#eage").value;
    readinfo.gender = document.querySelector("input[name = gender]:checked").value;
    readinfo.department = document.querySelector("#dept").value;
    readinfo.basicsalary = parseInt(document.querySelector("#bs").value);
    readinfo.pf = parseInt(document.querySelector("#pf").value);
    readinfo.hra = parseInt(document.querySelector("#hra").value);
    
    readinfo.pfamt = (readinfo.basicsalary * readinfo.pf) / 100;
    readinfo.hraamt = (readinfo.basicsalary * readinfo.hra) / 100;
    readinfo.totalsalary = parseInt( readinfo.pfamt + readinfo.hraamt + readinfo.basicsalary );

    readinfo.displayinfo();
     },

     displayinfo () {
        document.querySelector(".displayblock").style.display = 'block';
        document.querySelector("#dname").innerHTML = readinfo.name;
        document.querySelector("#dage").innerHTML = readinfo.age;
        document.querySelector("#dgender").innerHTML = readinfo.gender;
        document.querySelector("#ddept").innerHTML = readinfo.department;
        document.querySelector("#dbasic").innerHTML = readinfo.basicsalary;
        document.querySelector("#dpf").innerHTML = readinfo.pfamt ;
        document.querySelector("#dhra").innerHTML = readinfo.hraamt;
        document.querySelector("#dtotal").innerHTML = readinfo.totalsalary;
        console.log(readinfo.totalsalary);
        console.log(readinfo.department)
     }
}

