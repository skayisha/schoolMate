const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studName:{
        type:String,    //datatype
        required:true,  //manditory
        trim:true,    //white spaces remove
        minlength: 1,
        maxlength:100,
    },

    admNo:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    group:{
        type:String,
        required:true,
        trim:true,
    },
    
    specialization:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:String,
        required:true,
        trim:true,
        default:'not provided'
    },
    caste:{
        type:String,
        required:true,
        trim:true,
        default:'not provided'
    }

},{versionKey:false});

const Student=mongoose.model("students",studentSchema);

module.exports=Student;
