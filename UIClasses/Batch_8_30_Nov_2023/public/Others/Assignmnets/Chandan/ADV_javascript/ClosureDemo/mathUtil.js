
(() => {

    
    var count = 0;
    /**
    * method for adding two values
    * @param {number/string} firstvalue 
    * @param {number/string} secondvalue 
    * @returns {number}
    */

    var addValues = (firstvalue , secondvalue) => {
    count++;
    firstvalue = parseInt(firstvalue);
    secondvalue = parseInt(secondvalue);
    var result = firstvalue + secondvalue;
    return result;
    }


    /**
    * method for multiplication
    * @param {number/string} firstvalue 
    * @param {number/string} secondvalue 
    * @returns {number}
    */

     var mulValues = (firstvalue , secondvalue) => {
     count++;
     firstvalue = parseInt(firstvalue);
     secondvalue = parseInt(secondvalue);
     var result = firstvalue * secondvalue;
     return result;
    }

    /**
    * method for sub two values
    * @param {number/string} firstvalue 
    * @param {number/string} secondvalue 
    * @returns {number}
    */

    var subValues = (firstvalue , secondvalue) => {
    count++;
    firstvalue = parseInt(firstvalue);
    secondvalue = parseInt(secondvalue);
    var result = firstvalue - secondvalue;
    return result;
    }

    /**
    * method for divison two values
    * @param {number/string} firstvalue 
    * @param {number/string} secondvalue 
    * @returns {number}
    */

    var divValues = (firstvalue , secondvalue) => {
    count++;
    firstvalue = parseInt(firstvalue);
    secondvalue = parseInt(secondvalue);
    var result = firstvalue / secondvalue;
    return result;
   }

})();