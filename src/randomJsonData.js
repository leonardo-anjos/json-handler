const generateRandomData = () => {
  const getRandomString = () => {
    const strings = ['', '#', '01', '00000000000', 'M'];
    return strings[Math.floor(Math.random() * strings.length)];
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateRandomObject = () => {
    const object = {};
    const keys = ['name', 'rooms', 'age', 'gender', 'documents'];
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
      }
    });

    // add nested objects
    if (Math.random() < 0.5) {
      object['companies'] = generateRandomObject();
    }

    // add arrays
    if (Math.random() < 0.5) {
      const arrayLength = getRandomNumber(1, 5);
      object['rooms'] = [];
      for (let i = 0; i < arrayLength; i++) {
        object['rooms'].push(getRandomString());
      }
    }

    return object;
  };

  return generateRandomObject();
}

module.exports = generateRandomData;
