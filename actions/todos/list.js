module.exports = app => {
  return Action({
    execute: context => {
      const Todo = app.models.Todo;
      return Todo.find();
    }
  });
}
