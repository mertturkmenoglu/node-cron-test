const { default: axios } = require('axios');
const cron = require('node-cron');

const API = "http://www.randomnumberapi.com/api/v1.0/random?min=0&max=20&count=1"
let lastNumber = undefined;

console.log('Application started:', new Date().toISOString());

cron.schedule('* * * * *', () => {
  console.log('New task:', new Date().toISOString());
  console.log('Last number was:', lastNumber);

  axios.get(API)
    .then(res => {
      const num = res.data[0]
      console.log('New number:', num);
      lastNumber = num;
    })
    .catch(err => console.error(err));
});