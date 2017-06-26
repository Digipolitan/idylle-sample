module.exports = app => {
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        show: require('./show')(app),
        update: require('./update')(app),
        remove: require('./remove')(app)
    };
}