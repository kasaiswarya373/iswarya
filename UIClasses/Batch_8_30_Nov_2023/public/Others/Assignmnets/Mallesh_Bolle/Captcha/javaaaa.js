
        var alpha ="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*";
        var a = alpha.split('');   
        var sum = "";
        
        for (i=0 ; i < 6 ; i++){
            var num = Math.floor(Math.random()*alpha.length );
            sum = sum + a[num]
            
        }
        // console.log(a[num])
        console.log(sum)