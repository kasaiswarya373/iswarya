var colorPickerMethods = (() => {
    var getColor = () => {
        console.log("this is a closure test!!!!");
    }

    var NoInClosure = 15;

    var addVal = (a, b) => {
        return a + b;
    }

    return {
        callClosureMethod() {
            return getColor();
        },
        methodInReturn() {
            console.log("this method is getting invoked directly from return statement!!!!");
        },
        NoInClosure,
        addValues(fVal, sVal) {
            return addVal(fVal, sVal);

        }
    };
}
)();

//closure syntax : 
/*var nameOfClosure = (()=>{
    var callingMethod=()=>{
 var a=15;
    }
    return{
        calMethods(){
            callingMethod();
        },
        a
    
})();*/