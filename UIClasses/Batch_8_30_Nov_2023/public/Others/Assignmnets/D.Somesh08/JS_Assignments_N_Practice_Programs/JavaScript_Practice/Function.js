var displayName = function () {
    console.log("Function test...!")
};

for (let i = 0; i < 6; i++) {
    // displayName();
}

var display = () => {
    console.log("Ecma 6 feature : ")
}

display();

let rturnTest = (id, userName) => {
    return `Hey ${userName}, your id is : ${id}`;
}

let asign = rturnTest;

console.log(asign)


let id = 15;
let userName = 'Ravi';
let str = rturnTest(id, userName);

console.log(str);


dis(1,'somesh');
function dis(a, b) {
    console.log(`"1st noistring" ${a}, ${b}`)
}
function dis(a) {
    console.log("2nd noistring")
}

