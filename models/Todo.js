const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = Schema({
    title: String,
    dueDate: Date
});

return mongoose.model('Todo', TodoSchema);