const cron = require('node-cron');

// Second (first star) (optional)
// minute
// hour
// day of month
// month
// year (last star)
cron.schedule('* * * * * *', () => {
  console.log('Running task');
});