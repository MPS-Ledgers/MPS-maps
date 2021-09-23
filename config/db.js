const mongoose = require('mongoose')
require('dotenv').config()
const uri =process.env.MONGO_URL
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connectDB=()=>{mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}
module.exports=connectDB