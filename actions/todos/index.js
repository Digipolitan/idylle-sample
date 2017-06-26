module.exports = app => {
    return {
        list: require('./list')(app)
    };
}
