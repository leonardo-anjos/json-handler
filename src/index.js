const generateRandomData = require('./randomJsonData');

const handlerInputJson = (jsonData) => {
  if (typeof jsonData !== 'object' || jsonData === null) {
      throw new Error('input json invalid!');
  }

  console.log('INPUT: ', JSON.stringify(jsonData, null, 2), );

  Object.keys(jsonData).forEach(key => {
    const value = jsonData[key];

    if (typeof value === 'string' && (value === '' || value === '#')) {
        delete jsonData[key];
    } else if (typeof value === 'object' && !Array.isArray(value)) {
        handlerInputJson(value);
    } else if (Array.isArray(value)) {
        jsonData[key] = value.filter(item => item !== '' && item !== '#');
    }
  });
  
  console.log('OUTPUT: ', JSON.stringify(jsonData, null, 2));
  return jsonData;
}

handlerInputJson(generateRandomData());

module.exports = handlerInputJson;