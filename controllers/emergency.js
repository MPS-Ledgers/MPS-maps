const twilio=require('twilio')
exports.getMsg=async(req,res,next)=>{
    const ress=req.body
    const msg="URGENT!!!!\nAccident Location: "+ress.userlat+", "+ress.userlng+"\nNearest Hospital : \nHospital Name: "+ress.title+"\nHospital Address: "+ress.address+"\nNearest Police Station: "+ress.police
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({body: msg,from: process.env.FROM_NO, to: process.env.TO_NO})
      .then(message => console.log(message.sid));
}