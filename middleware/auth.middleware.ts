import { NextFunction,Response } from "express";
import * as jwt from 'jsonwebtoken';
import AuthenticationTokenMissing from "../Exceptions/AuthenticationTokenMissingException";
import WrongAuthenticationTokenException from "../Exceptions/WrongAuthenticationTokenException";
import DataStoredInToken from "../interfaces/dataStoredInToken";
import RequestWithUser from '../interfaces/requestWithUser';
import User from '../model/user.model';


const authMiddleware = async(req:RequestWithUser,res:Response,next:NextFunction) =>{
     const token = req.header('auth');
     if(token){
         const secret = process.env.Jwt_Secret;
         try{
             const verificationResponse = jwt.verify(token,secret) as DataStoredInToken
             const id = verificationResponse._id;
             const user = User.findById(id);

             if(user){
                 req.user = user;
                 next();
             }
             next( new WrongAuthenticationTokenException());
         }
         catch(error){
             next(new AuthenticationTokenMissing)
         }
     }
}

export default authMiddleware;