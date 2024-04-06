
/* @Arrow functions never have an *arguments objects.
   However, if we do want to capture the args for your arrow function,
   we can simply use a rest parameter.
   (i.e., (...restParam) (*after 3 dots, name can be anything))
*/
var sample = (...restParam) => {

    // console.log(a);
    // console.log(b);

    //console.log("am :"+ restParam);
    for (var i = 0; i < restParam.length; i++) {
        console.log("am1 :" + restParam[i]);
    }
}

/* 
@As we are capturing 1,2 in a,b,
now restparam will only capture only those values which are not getting captured.
in our case 3,4.
*/
var sample1 = (a, b, ...restParam) => {

    // console.log(a);
    // console.log(b);

    //console.log("am :"+ restParam);
    for (var i = 0; i < restParam.length; i++) {
        console.log("am1 :" + restParam[i]);
    }

}

function displayMessage() {
    for (var i = 0; i < arguments.length; i++) {
        console.log("am1 :" + arguments[i]);
    }

}

//displayMessage("Steve", "Jobs");

//sample(1, 2, 3, 4);
sample1(1, 2, 3, 4);