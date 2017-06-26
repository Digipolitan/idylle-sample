module.exports = app => {
  const router = app.Router();
  router.get('/', app.actions.todos.list.expose());

  return router;
}
