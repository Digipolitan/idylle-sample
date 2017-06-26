const mongoose = require('mongoose');

module.exports = app => {
  return mongoose.connect(app.settings.db.uri);
}
