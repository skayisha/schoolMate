const express = require('express');// to user Router() we imported this module
const {createAsync, getAllAsync,getAsync,deleteAsync,updateAsync} = require('../controllers/studentController');
const router = express.Router();

router.post("/create",createAsync);
router.get('/getAll',getAllAsync);
router.get('/get',getAsync);
router.delete("/delete/:id",deleteAsync);
router.put('/update/:id',updateAsync);

module.exports= router;