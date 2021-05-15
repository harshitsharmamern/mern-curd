// const express = require("express")
const express = require("express")
const route = express.Router()
const record = require("../conn/model")

route.get("/", (req, res) => {

    res.render("student",{user: "student registration"})

})

route.post("/", (req, res) => {

    // console.log(req.body.name)
    const data = new record({

        name : req.body.name,
        pass : req.body.pass

    })
    data.save()
})

route.get("/stulist", (req, res) => {

// const data = record.find({})

    // res.render("stulist")
    // res.json("data aaaaaaaaaa sakta hai?")

    record.find((err,docs)=>{
        if(!err)
        {res.render("stulist",{
            list : docs
        })}
    })
})
// console.log(data.name)
route.get("/edit/:id", (req, res) => {

    record.findById(req.params.id, (err,docs)=>{
 
     if(!err)
   {  res.render("edit" ,{ user : "update form",
                             data : docs
 })}
 else{console.log(err)}
 
    })

})

                                            // update 
route.post("/:id", (req, res) => {

   
   record.findOnAndUpdate(req.body.id,
 {  $set :   {  name : req.body.name,
          pass : req.body.pass 
        }},
         (err,docs)=>{

    if(err) throw err

        res.redirect("/", { udata : docs} )

    } 
    ,{
        new : true,
        useFindAndModify : false}
        

   )


})

                                            //   edit 
  
 // record.find((err,docs)=>{
        //     if(!err)
        //     {res.render("stulist",{
        //         list : docs
        //     })}
        // })

//                                                             delet form 
        route.get("/:id", (req, res) => {

          record.findByIdAndDelete(req.params.id, (err,docs) =>{

        if(!err){res.redirect("/stulist")}
          })
        })


module.exports = route


