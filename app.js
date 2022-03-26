// const express = require('express')
// const app = express()

// const courses =[
//     {id:1, name:'maths'},
//     {id:2, name:'physics'},
//     {id:3, name:'english'}
// ]

// app.get('/', (req,res) => {
//     res.send(courses);
// });

// app.get('/api/courses', (res,req) =>{
//     const courses = courses.find(c=> c.id === parseInt(req.params.id));
//     if(!courses) res.statusCode(404).send('This course with the id was not found'); //404
//     res.send(courses)
// })