

    var mathUtils = (() => {

        namespace.
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


        /**
         * Method for Div two values
         * @param {number/string} firstValue 
         * @param {number/string} secondValue 
         * @returns {number}
         */
        var divValues = (firstValue, secondValue) => {
            count++;
            firstValue = parseInt(firstValue);
            secondValue = parseInt(secondValue);
            var result = firstValue / secondValue;
            return result;
        }
        return {
            getAddValues(a1, a2) {
                return addValues(a1, a2);
            },
            mulValues(firstValue, secondValue) {
                count++;
                firstValue = parseInt(firstValue);
                secondValue = parseInt(secondValue);
                var result = firstValue * secondValue;
                return result;
            } 
        }
    })();
