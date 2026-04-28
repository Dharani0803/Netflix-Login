const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json());
var username="User"
var password="283"

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res)
{
    if(req.query.username===username && req.query.password===password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Server Started on port " + PORT);
});