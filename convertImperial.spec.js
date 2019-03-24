const convert = require('./convertImperial');

describe('convert', () => {

  it('throws an exception if the fromUnit is null', () => {
    const measurement = 12;
    const fromUnit = null;
    const toUnit = 'feet';

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`fromUnit: ${fromUnit} is not a valid unit.`);
  });

  it('throws an exception if the fromUnit is undefined', () => {
    const measurement = 12;
    const fromUnit = undefined;
    const toUnit = 'feet';

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`fromUnit: ${fromUnit} is not a valid unit.`);
  });

  it('throws an exception if the fromUnit is not a string', () => {
    const measurement = 12;
    const fromUnit = 34;
    const toUnit = 'feet';

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`fromUnit: ${fromUnit} is not a valid unit.`);
  });

  it('throws an exception if the fromUnit is not a valid unit', () => {
    const measurement = 12;
    const fromUnit = 'okay';
    const toUnit = 'feet';

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`fromUnit: ${fromUnit} is not a valid unit.`);
  });

  it('throws an exception if the toUnit is null', () => {
    const measurement = 12;
    const fromUnit = 'inches';
    const toUnit = null;

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`toUnit: ${toUnit} is not a valid unit.`);
  });

  it('throws an exception if the toUnit is undefined', () => {
    const measurement = 12;
    const fromUnit = 'inches';
    const toUnit = undefined;

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`toUnit: ${toUnit} is not a valid unit.`);
  });

  it('throws an exception if the toUnit is not a string', () => {
    const measurement = 12;
    const fromUnit = 'inches';
    const toUnit = 36;

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`toUnit: ${toUnit} is not a valid unit.`);
  });

  it('throws an exception if the toUnit is not a valid unit', () => {
    const measurement = 12;
    const fromUnit = 'inches';
    const toUnit = 'weeoo weeoo weeoo';

    expect(() => {
      convert(measurement, fromUnit, toUnit);
    }).toThrow(`toUnit: ${toUnit} is not a valid unit.`);
  });  

  it('returns the input measurement if the fromUnit and toUnit are the same', () => {
    // This is how far I would walk.
    const measurement = 500;
    const fromUnit = 'miles';
    const toUnit = 'miles';
    const expectedResult = measurement;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from inches to feet', () => {
    const measurement = 36;
    const fromUnit = 'inches';
    const toUnit = 'feet';
    const expectedResult = 3;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from inches to miles', () => {
    const measurement = 126720;
    const fromUnit = 'inches';
    const toUnit = 'miles';
    const expectedResult = 2;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from feet to inches', () => {
    const measurement = 4;
    const fromUnit = 'feet';
    const toUnit = 'inches';
    const expectedResult = 48;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from feet to miles', () => {
    const measurement = 15840;
    const fromUnit = 'feet';
    const toUnit = 'miles';
    const expectedResult = 3;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from miles to feet', () => {
    const measurement = 6;
    const fromUnit = 'miles';
    const toUnit = 'feet';
    const expectedResult = 31680;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });

  it('returns the proper conversion from miles to inches', () => {
    const measurement = 8;
    const fromUnit = 'miles';
    const toUnit = 'inches';
    const expectedResult = 506880;

    const result = convert(measurement, fromUnit, toUnit);

    expect(result).toBe(expectedResult);
  });
  
});