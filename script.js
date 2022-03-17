"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmpl = function (temps) {
  let max = temps[0];
  let min = temps[0];
  let amp = 0;
  for (let i = 1; i <= temps.length; i++) {
    if (temps[i] === "error") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //   for (let i = 1; i <= temps.length; i++) {
  //     if (temps[i] === "error") continue;
  //   }
  amp = max - min;
  console.log("Amplitude:", amp);
};
// calcTempAmpl(temperatures);
calcTempAmpl(temperatures);

// Same with two arrays

const temperatures2 = [6, -3, -5, -1, 6, 13, 21, 13, "error", 14, 9, 5];
//Merge arrays
const merge = temperatures.concat(temperatures2);
calcTempAmpl(merge);

const convKelvin = function () {
  const measure = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };

  const kelvin = measure.value + 273;
  return kelvin;
};
console.log(`Kelvin: ${convKelvin()}`);
