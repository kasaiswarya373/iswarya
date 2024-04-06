
var globalVar = "global variable";

var local = () => {
    var localVar = "local variable";
    var arr = [1,2,3];
    
    //console.log(`inside local function : ${localVar}`);

   global(localVar, arr);

   console.log(`after calling globalFunction : ${arr}`)
   console.log(`after calling globalFunction : ${localVar}`)
}

var global = (localVarFromLocalFunction, arr) => {

    //console.log(`inside Global function : ${globalVar}`);

   // console.log(`localVarFromLocalFunction in global function : ${localVarFromLocalFunction}`);

    localVarFromLocalFunction = "modified local var value";
    arr[0]=54;

    //console.log(`modified value : ${localVarFromLocalFunction}`);

    // localVarFromLocalFunction;
}

local();
//global();