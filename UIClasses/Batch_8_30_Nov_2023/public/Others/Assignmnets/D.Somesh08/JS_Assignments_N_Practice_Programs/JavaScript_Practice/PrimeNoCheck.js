var arr = [5, 7, 12, 21, 1008];
var count = 0;
for (var a of arr) {

    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            console.log(`${a} is a not prime no.`)
            count++;
            break;
        }

    }

    if (count === 0) {
        console.log(`${a} is a prime.`);

    }
}