var emp_info = [
    {
    EMP_Name : prompt("Enter Employee Name"),
    EMP_Age : prompt("Enter Employee Age"),
    EMP_Gender : prompt("Enter Employee Gender"),
    EMP_Dept : prompt("Enter Employee Dept"),
    EMP_BasicSalary : parseInt(prompt("Enter BasicSalary of the employee"))
    },{
    EMP_Name : prompt("Enter Employee Name"),
    EMP_Age : prompt("Enter Employee Age"),
    EMP_Gender : prompt("Enter Employee Gender"),
    EMP_Dept : prompt("Enter Employee Dept"),
    EMP_BasicSalary : parseInt(prompt("Enter BasicSalary of the employee"))
    
    },{
    EMP_Name : prompt("Enter Employee Name"),
    EMP_Age : prompt("Enter Employee Age"),
    EMP_Gender : prompt("Enter Employee Gender"),
    EMP_Dept : prompt("Enter Employee Dept"),
    EMP_BasicSalary : parseInt(prompt("Enter BasicSalary of the employee"))
    
    }
    ]
    
    
    var empData = (emp_info) =>{
    
    var empContainer = document.createElement('div')
    empContainer.setAttribute("class" , "emp-container")
    
    var ultag = document.createElement('ul')
    ultag.setAttribute("class","emp1")
    
    
    
    
    var li1 = document.createElement('li')
    li1.setAttribute("class", "emp1-img")
    var img = document.createElement('img')
    img.setAttribute("src","./css/myAvatar.jpg")
    li1.append(img)
    ultag.append(li1);
    
    
    
    
    var li2 = document.createElement('li')
    li2.innerText = `EMP_Name : ${emp_info.EMP_Name}`
    ultag.append(li2)
    
    var li3 = document.createElement('li')
    li3.innerText = `EMP_Age : ${emp_info.EMP_Age}`
    ultag.append(li3)
    
    
    var li4 = document.createElement('li')
    li4.innerText = `EMP_Gender : ${emp_info.EMP_Gender}`
    ultag.append(li4)
    
    var li5 = document.createElement('li')
    li5.innerText = `EMP_Dept : ${emp_info.EMP_Dept}`
    ultag.append(li5)
    
    var li6 = document.createElement('li')
    li6.innerText = `EMP_BasicSalary : ${emp_info.EMP_BasicSalary}`
    ultag.append(li6)
    empContainer.append(ultag)
    
    document.querySelector(".container").append(empContainer)
    // console.log(container)
    }
    
    for(var i = 0; i < emp_info.length ; i++){
    empData(emp_info[i])
    }
    