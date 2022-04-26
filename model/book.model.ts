

import mongoose from 'mongoose';
import { EbookCategory, EbookStatus } from '../enums/Ebook';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn:{
       type:String,
       required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:EbookCategory,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publicationDate:{
        type:Date
    },
    status:{
        type:EbookStatus,
        required: true
    }

}, {timestamps:true});

export default mongoose.model('Book',bookSchema);