const _ = require('lodash');

module.exports = models => {
    _.merge(models, {
        Todo: require('./Todo')
    });
}