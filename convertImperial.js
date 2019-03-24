const CONVERSION_RATIO_INCHES_FEET = 12;
const CONVERSION_RATIO_FEET_MILES = 5280;
const CONVERSION_RATIO_INCHES_MILES = 63360;

// Units
const INCHES = "INCHES";
const FEET = "FEET";
const MILES = "MILES";

// Units ordered by their magnitude (smallest to largest unit).
const UNITS_ORDERED_BY_MAGNITUDE = [INCHES, FEET, MILES];
const CONVERSION_RATIOS = {
  // From
  INCHES: {
    // To
    FEET: CONVERSION_RATIO_INCHES_FEET, // inches to feet
    MILES: CONVERSION_RATIO_INCHES_MILES // inches to miles
  },
  FEET: {
    INCHES: CONVERSION_RATIO_INCHES_FEET,
    MILES: CONVERSION_RATIO_FEET_MILES
  },
  MILES: {
    FEET: CONVERSION_RATIO_FEET_MILES,
    INCHES: CONVERSION_RATIO_INCHES_MILES
  }
};

/**
 * Convert "up" to a greater unit (e.g. inches to feet).
 * @param {number} measurement 
 * @param {number} conversionRatio Conversion ratio between the measurements.
 */
function convertUp(measurement, conversionRatio) {
  return measurement / conversionRatio;
}

/**
 * Convert "down" to a lesser unit (e.g. miles to feet).
 * @param {number} measurement Measurement to convert.
 * @param {number} conversionRatio Conversion ratio between the measurements.
 */
function convertDown(measurement, conversionRatio) {
  return measurement * conversionRatio;
}

/**
 * Converts from one measurement to another.
 * Supports imperial units only (inches, feet, miles).
 * @param {number} measurement Measurement to convert.
 * @param {string} fromUnit Unit to convert from (e.g. inches).
 * @param {string} toUnit Unit to convert to (e.g. miles).
 */
function convert(measurement, fromUnit, toUnit) {
  // This would be a good case for piping or composing our helper
  // functions using a library like ramda.
  // It would be much cleaner that way as opposed to this one.
  // I'll do without it here for now.

  if (fromUnit == null || typeof fromUnit !== 'string' || !UNITS_ORDERED_BY_MAGNITUDE.includes(fromUnit.toUpperCase()))
      throw `fromUnit: ${fromUnit} is not a valid unit.`;

  if (toUnit == null || typeof toUnit !== 'string' || !UNITS_ORDERED_BY_MAGNITUDE.includes(toUnit.toUpperCase()))
      throw `toUnit: ${toUnit} is not a valid unit.`;

  // Convert our units to upper case for future comparisons.
  fromUnit = fromUnit.toUpperCase();
  toUnit = toUnit.toUpperCase();

  let resultingMeasurement = measurement;

  // Don't do anything if no conversion is necessary.
  if (fromUnit === toUnit)
    return resultingMeasurement;

  // We could add checks and throw an error if findIndex returns -1; however,
  // we've already checked to see that the fromUnit and toUnit are in the array.
  // If they're not found, we've got something weird going on.
  const fromUnitIndex = UNITS_ORDERED_BY_MAGNITUDE.findIndex(unit => unit === fromUnit);
  const toUnitIndex = UNITS_ORDERED_BY_MAGNITUDE.findIndex(unit => unit === toUnit);

  if (fromUnitIndex < toUnitIndex) {
    // We need to convert up to larger units.
    resultingMeasurement = convertUp(resultingMeasurement, CONVERSION_RATIOS[fromUnit][toUnit]);
  } else if (fromUnitIndex > toUnitIndex) {
    // We need to convert down to smaller units.
    resultingMeasurement = convertDown(resultingMeasurement, CONVERSION_RATIOS[fromUnit][toUnit]);
  }

  return resultingMeasurement;
}

module.exports = convert;