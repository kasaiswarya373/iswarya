var data = {
  usa: {
    states: ["New York", "California", "Texas"],
    cities: {
      "New York": ["New York City", "Buffalo"],
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
  },
  canada: {
    states: ["Ontario", "Quebec", "British Columbia"],
    cities: {
      Ontario: ["Toronto", "Ottawa"],
      Quebec: ["Montreal", "Quebec City"],
      "British Columbia": ["Vancouver", "Victoria"],
    },
  },
  india: {
    states: ["UP", "MP", "Punjab", "Rajisthan"],
    cities: {
      UP: ["Nioda", "Kanpur", "Lacknow", "Etawah"],
      MP: ["Gwalior", "Bhopal", "Ujjain", "Indore"],
      Punjab: ["Chandigarh", "Ambala", "Ludhiana", "Amritsar"],
      Rajistha: ["Jaipur", "Jodhpur", "Kota", "Udaipur", "Alwar"],
    },
  },
};

function populateStates() {
  var countrySelect = document.getElementById("country");
  var stateSelect = document.getElementById("state");
  var citySelect = document.getElementById("city");

  var selectedCountry = countrySelect.value;
  var states = data[selectedCountry].states;

  // Clear the state and city dropdowns
  stateSelect.innerHTML = '<option value="">Select State</option>';
  citySelect.innerHTML = '<option value="">Select City</option>';

  // Populate the state dropdown
  states.forEach((state) => {
    var option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

function populateCities() {
  var countrySelect = document.getElementById("country");
  var stateSelect = document.getElementById("state");
  var citySelect = document.getElementById("city");

  var selectedCountry = countrySelect.value;
  var selectedState = stateSelect.value;
  var cities = data[selectedCountry].cities[selectedState];

  // Clear the city dropdown
  citySelect.innerHTML = '<option value="">Select City</option>';

  // Populate the city dropdown
  cities.forEach((city) => {
    var option = document.createElement("option");
    option.value = city;
    option.text = city;
    citySelect.add(option);
  });
}

populateStates();
