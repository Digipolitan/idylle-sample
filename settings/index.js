const _ = require('lodash');

module.exports = settings => {
    _.merge(settings, require('./settings.json'));
    if (process.env.NODE_ENV == 'production') {
      settings.port = process.env.PORT;
      settings.db.uri = process.env.MONGODB_URI;
    }
}
