// import express from 'express';
// import UserServices from '../services/user.service';

// class UserController{
//    async createUserController(req:express.Request,res:express.Response){
//         const user = await UserServices.create(req.body.email,req.body.name,req.body.address,req.body.phone);
//         if(user) return res.status(201).send({success:true,message:"user created successfully",data:user});
//         return res.status(400).send({success:false,message:"Failed to create new user"});
//     }

//   async deleteUserController(req:express.Request,res:express.Response){
//     const user = UserServices.delete(req.params.id);
//     if(!user) return res.status(400).send({success:false,message:"Failed to delete the user"});
//     return res.status(200).send(user);
//   }   

//   async getUsersController(_:express.Request,res:express.Response){
//       const users = await UserServices.getAllUser();
//       if(users) return res.status(200).send(users)
//       return res.status(404).send({success:false,message:"Not Found"})
//   }
// }

// export default new UserController;


import {Request,Response,NextFunction, Router} from 'express';
import NotAuthorisedExceptions from '../Exceptions/NotAuthorisedException';
import RequestWithUser from '../interfaces/requestWithUser';
import authMiddleware from '../middleware/auth.middleware';
import User from '../model/user.model';
import UserNotFoundException from '../Exceptions/UserNotFoundException';
import Controller from '../interfaces/controller.interface';
// import Userservices from '../services/user.service';


class UserController implements Controller {
    public path = '/user';
    public router = Router();
    private user = User;
     
    constructor(){
      this.initialiseRoutes()
    }

    private initialiseRoutes(){
      this.router.get(`${this.path}`, authMiddleware, this.getAllUsers);
      this.router.get(`${this.path}`, authMiddleware, this.getUserById);
    }

    private getUserById = async (request:Request, response:Response, next: NextFunction)=>{
      const id = request.params.id;
      const user = await this.user.findById(id);
      if(user) return response.status(200).send(user);
      next(new UserNotFoundException(id))
    }

    private getAllUsers = async(_:Request,response:Response)=>{
      const users = await this.user.find();
      if(users) return response.status(200).send(users);
    }
}

export default UserController;