module.exports = app => {
    app.server.use('/todos', require('./todos')(app));
}
