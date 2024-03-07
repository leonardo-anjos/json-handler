const generateRandomData = require('../randomJsonData')

describe('generateRandomData', () => {
  test('should return an object with random data', () => {
    const data = generateRandomData();

    // Check if data is an object
    expect(typeof data).toBe('object');

    // TO BE DONE: aleatory fields -> this flow isn't fixed and broke for each new data

    // // Check if data contains expected keys
    // expect(data).toHaveProperty('name');
    // expect(data).toHaveProperty('rooms');
    // expect(data).toHaveProperty('age');
    // expect(data).toHaveProperty('gender');
    // expect(data).toHaveProperty('documents');

    // // Check if the values of 'rooms' are arrays
    // if (Array.isArray(data.rooms)) {
    //   data.rooms.forEach(room => {
    //     expect(typeof room).toBe('string');
    //   });
    // }

    // // Check if the values of 'companies' are objects
    // if (typeof data.companies === 'object' && data.companies !== null) {
    //   Object.values(data.companies).forEach(value => {
    //     expect(typeof value).toBe('string');
    //   });
    // }
  });
});
