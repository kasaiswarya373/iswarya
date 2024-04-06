function calculate() {
  var expression = document.getElementById('display').Value;
  var result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }

  document.getElementById('display').Value = result;
}
    