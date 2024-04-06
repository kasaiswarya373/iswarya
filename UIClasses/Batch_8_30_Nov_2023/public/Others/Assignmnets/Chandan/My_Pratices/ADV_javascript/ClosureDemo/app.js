var count= 0;

var doOperation = (type) => {
    count++;
    var a1 = document.querySelector("#fval").value;
    var a2 = document.querySelector("#sval").value;
    var result;
    switch(type) {
        case 'add':
            result = addValues(a1, a2);
            break;
        case 'sub':
            result = subValuesValues(a1, a2);
            break;

        case 'mul':
            result = mulValues(a1, a2);
            break;

        case 'div':
            result = divValuesValues(a1, a2);
            break;
    
    }
    document.querySelector("#rblock").innerText = `The selected ${type} result is ${result}`;
    document.querySelector("#count_result").innerHTML = count;

}