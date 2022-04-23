import express from 'express';
import UserServices from '../services/user.service';

class UserController{
   async createUserController(req:express.Request,res:express.Response){
        const user = await UserServices.create(req.body.email,req.body.name,req.body.address,req.body.phone);
        if(user) return res.status(201).send({message:"user created successfully"});
        return res.status(400).send({message:"Failed to create new user"});
    }

  async deleteUserController(req:express.Request,res:express.Response){
    const user = UserServices.delete(req.params.id);
    if(!user) return res.status(400).send({message:"Failed to delete the user"});
    return res.status(200).send({message:"User deleted successfully"});
  }   

  async getUsersController(_:express.Request,res:express.Response){
      const users = await UserServices.getAllUser();
      if(users) return res.status(200).send(users)
      return res.status(404).send({message:"Not Found"})
  }
}

export default new UserController;