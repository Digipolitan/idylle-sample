const _ = require('lodash');

module.exports = settings => {
    _.merge(settings, require('./settings.json'));
    if (process.env.PORT)
      settings.port = process.env.PORT;
}
