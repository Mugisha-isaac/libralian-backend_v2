
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
      email:{
          type:String,
          required:true,
          unique:true
      },
      name:{
          type:String,
          required:true,
          max: 15
      },
      address:{
          type:String,
          required:true,
          max:150
      },
      phone:{
          type:Number,
          required:true,
          max: 10, 
          min: 10
      }
});


export default mongoose.model('User', userSchema);