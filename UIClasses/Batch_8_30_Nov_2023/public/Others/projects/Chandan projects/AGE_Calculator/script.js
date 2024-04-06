document.getElementById("calculateButton").addEventListener("click", function() {

    var dob = new Date (document.getElementById('dob').value);
    var now = new Date();
    var age = now.getFullYear() - dob.getFullYear();
    var monthDiff = now.getMonth()- dob.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
age--;
}

document.getElementById('age').innerText = age;
});