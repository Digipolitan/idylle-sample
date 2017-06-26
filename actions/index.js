module.exports = app => {
    app.actions = {
        todos: require('./todos')(app)
    };
};