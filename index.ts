import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import DB from './config/db.config';
import router from './routes/user.routes';


const app = express();
const port = process.env.PORT || 3000;



 app.get('/', (req,res)=>{
   res.send({message: "welcome to libralian backend apis"})
 })

 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use('/user',router);

mongoose.connect('mongodb://localhost/libralian').then(()=>{
    console.log(`Connection to database succeded`);
}).catch(()=>{
    console.log(`Failed to connect to database`);
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})