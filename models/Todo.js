const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = Schema({
  title: String
});

module.exports = mongoose.model('Todo', TodoSchema);
