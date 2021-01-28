const express = require('express');
const app = express();
app.use(express.json());


app.listen(5000, ()=>{
    console.log("listening on port 5000")
});

app.get("/",(req, res)=>{
    res.send("hello")
})


app.get("/data",(req,res) => {
    res.send( {name: "George" , age: 28})
});

app.get("/data",(req, res) =>{
    console.log(req.query);
    res.send({data: `hello, your name is ${req.query.name}` });
})

app.get("/dog/:id",(req,res)=>{
    console.log(req.params);
    res.send ("hi")
})

app.get("/person/:id",(req,res)=>{
    console.log(req.params.id);
})

app.post("/" ,(req,res)=>{
    console.log(req.body);
    res.send({data: req.body});
});

app.post("/dog" ,(req,res)=>{
    console.log(req.body);
    res.send({dog: req.body});
});

