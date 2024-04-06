var arr = [1,9,8,6,0];

for (var i=0; i<arr.length;i++) {

    for(var j=i+1;j<arr.length;j++){

        if(arr[i]>arr[j]) {
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    
}

console.log(arr)