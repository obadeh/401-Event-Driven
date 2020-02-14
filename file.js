

const events = require('./events.js');
const fs = require('fs');
require('./logger.js');

const alterFile = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      events.emit('error', err);
      return;
    }

    let text = data.toString().toUpperCase();
    events.emit('success', 'no error');
    // eslint-disable-next-line no-unused-vars
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if (err) {
        events.emit('error', err);
        return;
      }
      events.emit('success', 'no error');
      events.emit('save',`saved in ${file}`);
    });
  });
};

module.exports = alterFile;


