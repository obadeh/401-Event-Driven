

// eslint-disable-next-line no-undef
const events = require('./events.js');

events.on('save', payload => log(payload));
events.on('error', payload => log(payload));
events.on('success', payload => log(payload));

function log(payload) {
  let time = new Date();
  // eslint-disable-next-line no-console
  console.log({time, payload});
}