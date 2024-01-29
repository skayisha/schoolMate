const Student=require('../models/studentsModel');
const {MongoClient,ObjectId}=require('mongodb');
const createAsync= async (req,res)=>{
    try{
            const{
                studName,
                admNo,
                group,
                specialization,
                dob,
                caste


            }=req.body;

        let newStudent=new Student({
                studName,
                admNo,
                group,
                specialization,
                dob,
                caste

        });
            await newStudent.save();
            res.status(200).json("student created successfully !!!");
        }catch (error) {
            res.status(500).json({ error: error.message });
        };

};
 
const getAllAsync = async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getAsync = async (req, res) => {
    try {
      const {_admNo} = req.body;
      const student = await Student.findOne({admNo:_admNo});
      if (!student) {
        return res.status(404).json({ message: 'student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteAsync = async (req, res) => {
    try {
      const admno = req.body;
      const student = await Student.findOneAndDelete(admno);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateAsync = async (req, res) => {
    try {
      const studId = req.params.id;
      const { studName,dob } = req.body;
      let _studId=new ObjectId(studId);
      const updatedStud = await Student.findByIdAndUpdate({_id:_studId}, { studName, dob }, { new: true });
      if (!updatedStud) {
        return res.status(404).json({ message: 'student not found' });
      }
  
      res.status(200).json(updatedStud);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports= {createAsync,getAllAsync,getAsync,deleteAsync,updateAsync};








