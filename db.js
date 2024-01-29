const mongoose = require('mongoose');
const Student=require('../models/studentsModel');
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/schoolManagement',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected to MongoDB');
    }catch(error){
        console.error('Error connecting to mongoDB:',error.message);
        process.exit(1);
    }
};
module.exports = {connectDB,Student};