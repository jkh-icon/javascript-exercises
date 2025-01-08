const convertToCelsius = function(f) {

  let temp = (f - 32) * (5/9);
  let tempRounded = parseFloat(temp.toFixed(1));

  return tempRounded
};

const convertToFahrenheit = function(c) {

  let temp = c * (9/5) + 32;
  let tempRounded = parseFloat(temp.toFixed(1));

  return tempRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
