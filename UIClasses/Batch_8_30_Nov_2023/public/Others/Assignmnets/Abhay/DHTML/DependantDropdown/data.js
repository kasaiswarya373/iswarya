var countryObject = {
    "India": {
        "Maharashtra": ["Pune", "Kolhapur", "Satara"],
        "Karnataka": ["Belgum", "Nippani", "Dharwad"],
        "madhya pradesh": ["Ujjain", "Indor", "Omkareshwar"],
        "Telangana": ["Hydrabad", "Warangal", "Miyapur"]
    },
    "USA": {
        "California": ['Northern California', 'Central California', 'Southern California', 'Los Angeles'],
        "Florida": ['Miami', ' Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
        "Illinois": ['Cook County', 'Chicago', 'DuPage County', 'Lake County', 'Will County']
    }
}
window.onload = function () {
    var countrySel = document.querySelector("#displayCountries");
    var statesel = document.querySelector("#displaystate");
    var distSel = document.querySelector("#displaydistrict");
    for (var x in countryObject) {
        countrySel.options[countrySel.options.length] = new Option(x, x);
    }
    countrySel.onchange = function () {
        statesel.length = 1;
        distSel.length = 1;
        for (var y in countryObject[this.value]) {
            statesel.options[statesel.options.length] = new Option(y, y);
        }
    };
    statesel.onchange = function () {
        distSel.length = 1;
        var z = countryObject[countrySel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            distSel.options[distSel.options.length] = new Option(z[i], z[i]);
        }
    };
};