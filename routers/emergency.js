const express=require('express')
const {getMsg}=require('../controllers/emergency')
const router=express.Router()
router.route('/').post(getMsg)

module.exports=router