const write = require('write');
const auth = require('../test/support/auth');
const repos = require('../');

repos(['doowb', 'jonschlinkert'], auth)
  .then(res => {
    write.sync('repos.json', JSON.stringify(res, null, 2));
    return res;
  })
  .catch(console.error);
