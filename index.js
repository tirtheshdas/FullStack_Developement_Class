const express = require('express');
const Joi = require('joi');
const { join } = require('path');
const app = express()

app.use(express.json())
// //res -> resource
// //req -> request

const courses =[
    {id:1, name:"maths"},
    {id:2, name:"physics"},
    {id:3, name:"english"}
]

app.get('/', (req,res) => {
    res.send('Hello world')
});

// //params -> :name
// //Query -> ?sortBy

app.get('/api', (req,res) => {
    res.send(req.query)
});


app.get('/', (req,res) => {
    res.send(courses)
})

app.get('/api/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send("this course is not available in the list");
    res.send(course.name)
})

app.post('/api/post', (req,res)=>{
    const schema={
        name: Joi.string().min(3).required()
    }
   const result = Joi.validate(req.body, schema)
   console.log(result)
   if(result.error){
       res.status(400).send(result.error.details)
       return;
   }
    let course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course)
    res.send(courses)
})

app.listen(3000,() => console.log("listening on port 3000......"))


