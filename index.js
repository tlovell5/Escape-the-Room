var readlineSync = require('readline-sync'),
  options = ['Put hand in hole', 'Find the Key', 'Open the door'],
  index = readlineSync.keyInSelect(options, 'You are trapped in a room and need to escape, what are you going to do first?');
console.log('Ok, ' + options[index] + ' goes to your room.');