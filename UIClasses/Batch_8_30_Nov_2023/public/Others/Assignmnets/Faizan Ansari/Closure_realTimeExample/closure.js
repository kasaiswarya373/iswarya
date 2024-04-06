var count = 0;
var doOperation = (type) => {
    count++;
    var a1 = document.querySelector("#fval").value;
    var a2 = document.querySelector("#sval").value;
    var result;
    switch(type) {
        case 'add':
            result = math_Util.getaddValues(a1, a2);
            break;
        case 'sub':
            result = math_Util.getsubValues(a1, a2);
            break;
        case 'div':
            result = math_Util.divValues(a1, a2);
            break;
        case 'mul':
            result = math_Util.mulValues(a1, a2);
            break;
    }

    document.querySelector("#rblock").innerText = `The selected ${type} result is ${result}`;
    document.querySelector("#count_result").innerHTML = count;
}