var math_Util =  (()=>{
        var count = 0;
    /**
     * Method for adding two values
     * @param {number/string} firstValue 
     * @param {number/string} secondValue 
     * @returns {number}
     */
    var addValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue + secondValue;
        return result;
    }

    /**
     * Method for Sub two values
     * @param {number/string} firstValue 
     * @param {number/string} secondValue 
     * @returns {number}
     */
    var subValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue - secondValue;
        return result;
    }

    return{
        getaddValues(a1, a2){
            return addValues(a1, a2);
        },
        getsubValues(a1, a2){
            return subValues(a1, a2);
        },

        /**
         * Method for Mul two values
         * @param {number/string} firstValue 
         * @param {number/string} secondValue 
         * @returns {number}
         */
        mulValues(firstValue, secondValue) {
            count++;
            firstValue = parseInt(firstValue);
            secondValue = parseInt(secondValue);
            var result = firstValue * secondValue;
            return result;
        },

        /**
         * Method for Div two values
         * @param {number/string} firstValue 
         * @param {number/string} secondValue 
         * @returns {number}
         */
        divValues(firstValue, secondValue) {
            count++;
            firstValue = parseInt(firstValue);
            secondValue = parseInt(secondValue);
            var result = firstValue / secondValue;
            return result;
        }
    }

  })(); 


