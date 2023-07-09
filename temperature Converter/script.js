function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  if (unit === "celsius") {
      var convertedFahrenheit = (temperatureInput * 9 / 5) + 32;
      var convertedKelvin = parseFloat(temperatureInput) + 273.15;
      resultElement.innerText = temperatureInput + "°C is " + convertedFahrenheit.toFixed(2) + "°F and " + convertedKelvin.toFixed(2) + "K";
  } else if (unit === "fahrenheit") {
      var convertedCelsius = (temperatureInput - 32) * 5 / 9;
      var convertedKelvin = (parseFloat(temperatureInput) + 459.67) * 5 / 9;
      resultElement.innerText = temperatureInput + "°F is " + convertedCelsius.toFixed(2) + "°C and " + convertedKelvin.toFixed(2) + "K";
  } else if (unit === "kelvin") {
      var convertedCelsius = temperatureInput - 273.15;
      var convertedFahrenheit = (parseFloat(temperatureInput) * 9 / 5) - 459.67;
      resultElement.innerText = temperatureInput + "K is " + convertedCelsius.toFixed(2) + "°C and " + convertedFahrenheit.toFixed(2) + "°F";
  }
}
