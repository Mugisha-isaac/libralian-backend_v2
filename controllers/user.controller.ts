import express from 'express';
import UserServices from '../services/user.service';

class UserController{
   async createUserController(req:express.Request,res:express.Response){
        const user = await UserServices.create(req.body.email,req.body.name,req.body.address,req.body.phone);
        if(user) return res.status(201).send({message:"user created successfully"});
        return res.status(400).send({message:"Failed to create new user"});
    }
}

export default new UserController;