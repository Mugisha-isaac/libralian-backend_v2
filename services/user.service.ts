import User from '../model/user.model';

class UserServices{
   async create(email:string, name:string, address:string, phone:number){
     const user = new User();
     user.email = email
     user.name = name
     user.address = address
     user.phone = phone
     user.save()
     return user;
    }
}

export default new UserServices;