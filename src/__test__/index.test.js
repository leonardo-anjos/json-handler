const handlerInputJson = require('../index')

describe('handlerInputJson', () => {
  test('should throw an error when provided with invalid input', () => {
    expect(() => {
      handlerInputJson("invalid input");
    }).toThrow('input json invalid!');

    expect(() => {
      handlerInputJson(null);
    }).toThrow('input json invalid!');

    expect(() => {
      handlerInputJson(123);
    }).toThrow('input json invalid!');
  });

  test('should not throw an error when provided with a valid JSON object', () => {
    expect(() => {
      handlerInputJson({});
    }).not.toThrow();
  });

  test('should remove empty strings and "#" from JSON data', () => {
    const jsonData = {
      'name': '',
      'rooms': ['', '01', '#', '02'],
      'age': '#',
      'gender': 'M',
      'companies': {
        'name': '#',
        'document': '0000000000'
      }
    };

    const expectedData = {
      'rooms': ['01', '02'],
      'gender': 'M',
      'companies': {
        'document': '0000000000'
      }
    };

    expect(handlerInputJson(jsonData)).toEqual(expectedData);
  });

  test('should not modify JSON data if there are no empty strings or "#"', () => {
    const jsonData = {
      'name': 'John',
      'age': 30,
      'gender': 'M',
      'companies': {
        'name': 'Company',
        'document': '0000000000'
      }
    };

    expect(handlerInputJson(jsonData)).toEqual(jsonData);
  });
});
