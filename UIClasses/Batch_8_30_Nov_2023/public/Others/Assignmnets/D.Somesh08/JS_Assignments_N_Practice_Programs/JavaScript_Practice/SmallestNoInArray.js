var arr = [0, 5, 4, 3, 89, 91, 1];
var min = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {

        if (arr[i] > arr[j]) {
            min = arr[j];
        }
    }
}

console.log(min);