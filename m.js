const express = require ("express")
const app = express()
const port = process.env.PORT || 8000
const route = require("./controllerRouter/stu")
require("./conn/db")
const bodyParser = require("body-parser")
// const model =require("./conn/model")
// const record = require("./conn/model")
// var expressLayouts = require('express-ejs-layouts');
//  app.use(express.urlencoded({extended : false}))
// app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(bodyParser.json())

app.use("/",route)
app.set('view engine', 'ejs');
 
// app.use(expressLayouts);

// app.use(express.static())
// app.get("/", (req,res)=>{

//     res.render('index')

// })

app.listen(port, ()=>{
    console.log(`running ${port}`)
})




