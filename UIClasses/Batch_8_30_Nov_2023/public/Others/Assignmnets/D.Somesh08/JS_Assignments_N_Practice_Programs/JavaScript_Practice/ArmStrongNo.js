
var arr = [153, 456, 789];

for (var i of arr) {

    var temp = i, count = 0;

    while (temp > 0) {
        temp = parseInt(temp / 10);
        count++;
    }

    var temp1 = i, rem = 0, sum = 0;

    while (temp1 > 0) {
        rem = temp1 % 10;
        sum += rem ** count;
        temp1 = parseInt(temp1 / 10);
    }

    if(sum===i){
        console.log(`${i} is an Armstrong number.`)
    }else{
        console.log(`${i} is not an Armstrong no.`)
    }

}