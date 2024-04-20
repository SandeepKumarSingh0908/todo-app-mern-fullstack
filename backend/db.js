const mg = require("mongoose");
mg.connect("mongodb://localhost:27017/todo-app");
const todoSchema = mg.Schema(
    {
        title : String,
        description : String,
        completed : Boolean
    }
);


const todo = mg.model('todos',todoSchema);

module.exports = {
    todo
}