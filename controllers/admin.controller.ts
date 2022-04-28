
import express from 'express';
import adminService from '../services/admin.service';

class AdminController{
     createNewAdminController = async(req:express.Request,  res:express.Response)=>{
        const admin = await adminService.createNewAdmin(req.body.username,req.body.password);
        if(!admin) return res.status(400).send({message:"Failed to create new admin"});
        return res.status(201).send(admin);
    }

    adminLoginController = async(req:express.Request,res:express.Response)=>{
        const admin = await adminService.Login(req.body.username,req.body.password);
        if(!admin) return res.status(400).send({message:"invalid credentials"});
        return res.status(200).send({message:"Successful Login", admin})
    }
}

export default new AdminController;