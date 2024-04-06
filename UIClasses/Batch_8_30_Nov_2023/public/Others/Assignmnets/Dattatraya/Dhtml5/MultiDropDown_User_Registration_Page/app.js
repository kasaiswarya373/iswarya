var countryList = {
  india: {
    states: ["Odisha", "Andrapradesh", "WestBengal"],
    districts: {
      Odisha: ["Khordha", "Cuttack ", "Puri", "Koraput"],
      Andrapradesh: ["Guntur", "Nellore", "Visakhapatnam", "Chittoor"],
      WestBengal: ["Kolkata", "Bankura", "Darjeeling", "Howrah"],
    },
  },
  uae: {
    states: ["AbuDhabi", "Dubai", "Sharjah"],
    districts: {
      AbuDhabi: ["Khalifa City", "Al Bahia City", "Al Rahba"],
      Dubai: ["Al Bastakiya", "Al Karama", " Bur Dubai"],
      Sharjah: ["Kalba City", "Al Madam", "Al Hamriya"],
    },
  },
  usa: {
    states: ["Florida", "Texas", "Georgia"],
    districts: {
      Florida: ["Southwest Florida", "Northwest Florida", "Central Florida"],
      Texas: ["Atascosa County", "Andrews County", "Austin County"],
      Georgia: ["Milledgeville", "Alma", "Atlanta"],
    },
  },
};

function updateStates() {
  var countrySelect = document.getElementById("country");
  var stateSelect = document.getElementById("state");
  var districtSelect = document.getElementById("district");

  var selectedCountry = countrySelect.value;
  var states = countryList[selectedCountry].states;

  stateSelect.innerHTML = '<option value=""> select State</option>';
  districtSelect.innerHTML = '<option value="">select District</option>';

  states.forEach((state) => {
    var option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

function updateDistricts() {
  var countrySelect = document.getElementById("country");
  var stateSelect = document.getElementById("states");
  var districtSelect = document.getElementById("district");

  var selectedCountry = countrySelect.value;
  var selectedState = stateSelect.value;
  var districts = countryList[selectedCountry].districts[selectedState];

  districtSelect.innerHTML = '<option value=""> select District</option>';

  districts.forEach((district) => {
    var option = document.createElement("option");
    option.value = district;
    option.text = district;
    districtSelect.add(option);
  });
}

updateStates();
