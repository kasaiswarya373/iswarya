      
var passwordValidation = (event) =>{
    var element = event.target;
    if(element.value.length == 8){
        document.getElementById('length').style.color = 'green';
    }else{
        document.getElementById('length').style.color =  'red';
    }
    if(element.value.length > 0){
        document.querySelector('.validation').style.display = 'block';
    }else{
        document.querySelector('.validation').style.dispaly = 'none';
    }
    var char = element.value.charCodeAt(0);
    if(char >= 65 && char <= 90){
        document.getElementById('firstCharValidation').style.color = 'green';
    }else{
        document.getElementById('firstCharValidation').style.color =  'red';
    }
    
    minimumAndMaxNumbers(event);
    onlyonespecialchar(event);
    var lastchar = element.value.charCodeAt(7);
    if(lastchar >=36 && lastchar <= 38 || lastchar == 64 || lastchar == 42 ){
        document.getElementById('last').style.color = 'red';
    }else{
        document.getElementById('last').style.color = 'green';
    }
    
    }   
        var minimumAndMaxNumbers = (event) => {
            var element = event.target;
            var charat = element.value;
            var count = 0;
            var i = 1;
            while(i < 8){
                var a = charat.charCodeAt(i);
                if(a >=48 && a <= 57){
                count ++;
                }
                i++;
                }
                if(count <= 3 && count >= 1){
                    document.getElementById('number').style.color = 'green';
                }else{
                    document.getElementById('number').style.color = 'red';      
                }
        }
        var onlyonespecialchar = (event) => {
            var element = event.target;
            var charat = element.value;
            var count = 0;
            var i = 1;
            while(i < 7){
                var a = charat.charCodeAt(i);
                if(a >=36 && a <= 38 || a == 64 || a == 42){
                  
                count ++;
                }
                i++;
                }
                if(count == 1){
                    document.querySelector('#onlyonespecial').style.color = 'green';
                }else{
                    document.querySelector('#onlyonespecial').style.color = 'red';           
                 }
        }
    