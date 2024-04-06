var StudentDetails = () => {
    var getinfo = {};
    getinfo.name = document.querySelector("#sname").value;
    getinfo.age = document.querySelector("#sage").value;
    getinfo.gender = document.querySelector("input[name = gender]:checked").value;
    getinfo.class = document.querySelector("#sclass").value;
    getinfo.marks = [];

    for (var a = 1; a <= 5; a++) {
        var id = "#m" + a;
        var value = parseInt(document.querySelector(id).value);
        getinfo.marks.push(value);
    }
    console.log(getinfo);
} 