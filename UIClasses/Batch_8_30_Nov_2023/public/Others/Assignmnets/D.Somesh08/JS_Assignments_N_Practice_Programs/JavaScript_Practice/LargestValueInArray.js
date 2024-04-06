var arr = [13, 21, 14, 19,  1000, 250000, 10000];

for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            //             var temp = arr[j];
            //             arr[j] = arr[i];
            //             arr[i] = temp;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

// var max = arr[0];

// for(var k=0; k<arr.length; k++) {
//     if(arr[k]>max) {
//         max = arr[k];
//     }
// }


