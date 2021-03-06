const seneca = require('seneca')();

seneca.add('role:math,cmd:sum', (msg, reply) => {
  reply(null, { answer: (msg.left + msg.right) });
});

seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, (err, result) => {
  if (err) {
    return console.error(err);
  }
  return console.log(result);
});

module.exports = function() {
    const seneca = this;
    seneca.add('role:math,cmd:sum', (msg, reply) => {
        reply(null, { answer: (msg.left + msg.right) });
    });
    return {
        name: 'feedback-service'
    }
}