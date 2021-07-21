const ftoc = function(fTemp) {
  let newTempCelc = (fTemp - 32) * (5/9)
  return Math.round(newTempCelc * 10) / 10;
};

const ctof = function(ctemp) {
  let newTempFar = (ctemp * (9/5)) + 32;
  return Math.round(newTempFar * 10) / 10;
};


module.exports = {
  ftoc,
  ctof
};
