let count = 0;
let symbolCount = 0;

let showPassword = () => {
    let passwordEl = document.querySelector('#userPassword');
    let elType = passwordEl.getAttribute('type');
    if (elType === 'password') {
        passwordEl.setAttribute('type', 'text');
        document.querySelector('#closedEye').style.display = 'inline-block';
        document.querySelector('#openEye').style.display = 'none';
    } else {
        passwordEl.setAttribute('type', 'password');
        document.querySelector('#openEye').style.display = 'inline-block';
        document.querySelector('#closedEye').style.display = 'none';
    }

}

let keyDownValidations = () => {
    let targetEl = event.target;
    //check if the symbol being removed & if so,decrease the symbol count.
    for (let i = 0; i < targetEl.value.length; i++) {
        let charCode = targetEl.value.charAt(i).charCodeAt(0);

        if (charCode >= 33 && charCode <= 47) {
            symbolCount++;
        }
    }

    if (symbolCount === 1) {
        document.querySelector('#oneSymbol').style.color = 'green';
    } else {
        document.querySelector('#oneSymbol').style.color = 'red';
        symbolCount = 0;
    }

    //check if password contains symbols.
    if (event.keyCode >= 33 && event.keyCode <= 47) {
        symbolCount++;

        if (symbolCount > 1) {
            return false;
        } else {
            document.querySelector('#oneSymbol').style.color = 'green';
            return true;
        }203035- 89504   1998 1 2/4 1/4
    }
}

let onKeyPressValidation = () => {
    let targetEl = event.target;

    //password should contains only upto 2 digits check.
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        count++;
        if (count <= 2) {
            document.querySelector('#minDgts').style.color = 'green';
        }
        if (count > 2) {
            return false;
        }
        return true;
    }

}


let onKeyUpValidation = () => {
    let targetEl = event.target;

    //Check if the password length is 8 characters.
    if (targetEl.value.length >= 8) {
        document.querySelector('#minLen').style.color = 'green';
        document.querySelector('#minLenCheck').style.display = 'inline-block';
        document.querySelector('#minLenX').style.display = 'none';
    } else {
        document.querySelector('#minLen').style.color = 'red';
        document.querySelector('#minLenCheck').style.display = 'none';
        document.querySelector('#minLenX').style.display = 'inline-block';
    }

    //check if the character at 1st position is Capital letter Alphabet.
    let val = targetEl.value;
    let firstChar = val.charCodeAt(0);
    if (firstChar >= 65 && firstChar <= 90) {
        document.querySelector('#upperCaseStart').style.color = 'green';
    } else {
        document.querySelector('#upperCaseStart').style.color = 'red';
    }


    //check if the last char is a symbol.
    let elmt = document.querySelector('#userPassword');
    let lastChar = elmt.value.charAt(elmt.value.length - 1);

    let asciVal = lastChar.charCodeAt(0);
    console.log('asciVal', asciVal)
    if (asciVal >= 33 && asciVal <= 47) {
        document.querySelector('#endSpecialSymbol').style.color = 'red';
    } else {
        document.querySelector('#endSpecialSymbol').style.color = 'green';
    }

}