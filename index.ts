import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import DB from './config/db.config';
import UsersRoutes from './routes/user.routes';
import BooksRoutes from './routes/book.routes';
import OrderRoutes from './routes/order.routes';

const app = express();
const port = process.env.PORT || 4000;



 app.get('/', (req,res)=>{
   res.send({message: "welcome to libralian backend apis"})
 })

 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use('/user',UsersRoutes);
 app.use('/book',BooksRoutes);
 app.use('/order',OrderRoutes);

mongoose.connect('mongodb://localhost/libralian').then(()=>{
    console.log(`Connection to database succeded`);
}).catch(()=>{
    console.log(`Failed to connect to database`);
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})