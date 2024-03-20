import mongoose from "mongoose"

const querySchema = new mongoose.Schema({
    username : {
        type : String,
        required :true,
        lowercase : true,
        minLength : 1,
        maxLength : 26,
    },
    language : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 26,
    },
    stdin : {
        type : String,
        minLenght : 1,
        lowercase : true
    },
    timeTake : {
        type : String,
    },
    code  :{
        type : String,
        maxLength : 500
    }
},
{
    timestamps : true
})

export const Query = mongoose.model("Query", querySchema)