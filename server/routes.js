const routes = require('next-routes');

module.exports = routes()
  .add('login')
  .add('episodes')
  .add('characters')
  .add('quotes');
