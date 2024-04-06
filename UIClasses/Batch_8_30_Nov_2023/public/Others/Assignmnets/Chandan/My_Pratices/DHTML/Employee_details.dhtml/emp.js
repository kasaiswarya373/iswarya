var Employeedetails = {
    Image: "plash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
    name:"Swati",
    age: 23,
    gender: "female",
    basicsal: 34000,
    pfpercentage: "12",
    hrapercentage:"14"
};
var empdetails = (employeedetails) => {
     var mainTag = document.createElement("div");
     mainTag.setAttribute("class", "main");
     mainTag.style.border = "1px solid";
     mainTag.style.width = "300px";
     mainTag.style.height = "auto";
     mainTag.style.margin = "2opx auto";
     mainTag,style.backgroundcolor = "red";



     var div1 = document.createElement("div");
     var imgTag = document.createElement("img");
     imgTag.setAttribute("src", employeedetails.Image);
     div1.append(imgTag);
     mainTag.append(div1);


     document.querySelector(".employeedetails").append(mainTag);
}