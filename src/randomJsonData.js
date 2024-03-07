const generateRandomData = () => {
  const getRandomString = () => {
    const strings = ['', '#', 'apple', 'banana', 'orange'];
    return strings[Math.floor(Math.random() * strings.length)];
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomBoolean = () => {
    return Math.random() < 0.5 ? true : false;
  };

  const generateRandomObject = () => {
    const object = {};
    const keys = ['name', 'age', 'gender', 'address', 'city'];
    keys.forEach(key => {
      const randomValue = Math.random();
      if (randomValue < 0.2) {
        object[key] = '';
      } else if (randomValue < 0.4) {
        object[key] = '#';
      } else if (randomValue < 0.6) {
        object[key] = getRandomString();
      } else if (randomValue < 0.8) {
        object[key] = getRandomNumber(18, 60);
      } else {
        object[key] = getRandomBoolean();
      }
    });

    // add nested objects
    if (Math.random() < 0.5) {
      object['nestedObject'] = generateRandomObject();
    }

    // add arrays
    if (Math.random() < 0.5) {
      const arrayLength = getRandomNumber(1, 5);
      object['nestedArray'] = [];
      for (let i = 0; i < arrayLength; i++) {
        object['nestedArray'].push(getRandomString());
      }
    }

    return object;
  };

  return generateRandomObject();
}

module.exports = generateRandomData;
