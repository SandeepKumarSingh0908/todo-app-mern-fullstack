const express = require("express");
const {createTodo,updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = await createTodo.safeParse(createPayload);

    if(parsedPayload.success){
        console.log(await todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : createPayload.completed
        }))

        res.status(200).json({
            msg : "todo created"
        })
    }else{
        res.status(411).json({
            msg : "You sent the wrong input body."
        })
    }
});


app.get("/todos", async (req,res) => {
    const todos = await todo.find({});
    res.status(200).json({
        todos : todos
    })
});

app.put("/completed",async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(parsedPayload.success){
        await todo.update({
            _id : updatePayload.id 
        },
    {
        completed : true
    })

    res.status(200).json({
        msg : "Successfully marked as completed."
    })
    }else {
        res.status(411).json({
            msg : "you sent the wrong the input body."
        })
    }
});


app.listen(3000)
 