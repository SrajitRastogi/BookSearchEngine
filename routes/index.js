const express=require('express');
const router=express.Router();
const homeContoller=require('../controllers/home_controller');

router.get('/',homeContoller.home);
router.use('/users',require('./users'));
module.exports=router;