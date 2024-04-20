const zod = require('zod');

const createTodoObject = zod.object({
    title : zod.string(),
    description : zod.string()
})

const  updateTodo = zod.object({
    id: zod.string()
})


module.exports = {
    createTodo : createTodoObject,
    updateTodo : updateTodo
}