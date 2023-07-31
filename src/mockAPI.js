import moment from 'moment';
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateTrainData = () => {
    const trains = [];
  
    for (let i = 1; i <= 10; i++) {
      const departureTime = moment().add(getRandomInt(10, 240), 'minutes').toISOString();
      const seatsSleeper = getRandomInt(0, 100);
      const seatsAc = getRandomInt(0, 50);
      const priceSleeper = getRandomInt(500, 2000);
      const priceAc = getRandomInt(1000, 5000);
  
      trains.push({
        id: i,
        name: `Train ${i}`,
        departureTime,
        seats: {
          sleeper: seatsSleeper,
          ac: seatsAc,
        },
        prices: {
          sleeper: priceSleeper,
          ac: priceAc,
        },
      });
    }
  
    return trains;
  };
  
  const fetchTrainData = () => {
    return new Promise((resolve) => {
      resolve(generateTrainData());
    });
  };
  
  export { fetchTrainData };