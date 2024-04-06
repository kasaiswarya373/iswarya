
var nums = [1,2];

nums.splice(2,1, 2,3,4,5,60);

for (const i of nums) {
    console.log(i);
}