const mongoose= require("mongoose")

const stuSchema = new mongoose.Schema({
name : {
type : String,
required : "this field is required",
repeated : false
},
pass : {
    type : String   ,required : "this field is required",
    repeated : false
    }
})

const stModel = new mongoose.model("Mystydent",stuSchema)


module.exports = stModel



