import { Schema, model } from "mongoose";

const doctorSchema = Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    
    },
    sceciality:{
        type:String,
        required:true,
    },
    optTiming:{
        type:String,

    }


},{
    timestamps:true
})
const Doctor =model('Doctor', doctorSchema)
export default Doctor