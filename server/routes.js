const routes = require('next-routes');

module.exports = routes()
  .add('login')
  .add('create')
  .add('timeline')
  .add('details', '/details/:id')
  .add('edit', '/edit/:id');
