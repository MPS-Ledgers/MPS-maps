const axios=require('axios')
let incidentData, userlat, userlong
exports.getLoc=async(req,res,next)=>{
    const {latitude,longitude}=req.body
    userlat=latitude
    userlong=longitude
}

exports.traffic=async(req,res,next)=>{
    const bbox = (userlong-0.05)+","+(userlat-0.05)+","+(userlong+0.05)+","+(userlat+0.05)
    const url = process.env.API_URL+process.env.API_KEY+"&bbox="+bbox+"&fields="+process.env.API_REQ+"&language=en-GB&timeValidityFilter=present"
    await axios.get(url).then((response)=>{
        incidentData=response.data
    })
    res.status(201).json({
            incidentData
        })
    }