var stdData = ( ) => {
   var readinfo = {};
   readinfo.name = document.querySelector("#sname").value;
   readinfo.age = document.querySelector("#sage").value;
   readinfo.gender = document.querySelector("input[name = gender]:checked").value; 
   readinfo.class = document.querySelector("#stdclass").value;
   readinfo.marks = [];

   for(var i = 1 ; i <= 5; i++){
    var id = " #m"+ i;
    var value = parseInt(document.querySelector(id).value);
    readinfo.marks.push(value);
   }
   console.log(readinfo);
}

