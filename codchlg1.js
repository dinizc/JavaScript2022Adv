"use strict";

// const temperatures = [17, 21, 23]; //Original array
const temperatures = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  const days = temps.length;
  const sep = " ... ";
  let prt = sep;
  for (let i = 0; i < days; i++) {
    prt += `${temps[i]}ºC in ${i + 1} days${sep}`;
  }
  console.log(prt);
};

printForecast(temperatures);
