const express=require('express')
const {traffic, getLoc}=require('../controllers/traffic')
const router=express.Router()
router.route('/send').post(getLoc)
router.route('/recieve').get(traffic)

module.exports=router