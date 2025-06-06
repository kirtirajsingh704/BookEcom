import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMail from './email.controller.js';

import UserSchemaModel from '../models/user.model.js';

export const save =async(req,res)=>{
   
    var userList=await UserSchemaModel.find();
        // console.log(userList);
    var len=userList.length;
      //console.log(len);
    var _id=(len==0)?1:userList[len-1]._id+1; 
      //console.log(_id);
    var userDetails ={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
    //console.log(userDetails);
    try
    {
      var userList= await UserSchemaModel.create(userDetails);
       sendMail(userList.email,userList.password);
       res.status(201).json({"status":true});
    }
    catch(error)
    {
        res.status(500).json({"status":false});
    }
}

export const login=async(req,res)=>{
    var condition_obj={...req.body,"status":1};
    var userList=await UserSchemaModel.find(condition_obj);
    //console.log(userList);  
    if(userList.length!=0)
    {
        const payload={"subject":userList[0].email};
        const key=rs.generate();
        const token = jwt.sign(payload,key);    
        res.status(200).json({"token":token,"userList":userList[0]});
    }
    else
    {
        res.status(500).json({"msg":"Invalid username and password"});
    }
} 

export const fetch =async (req,res)=>{

    
    var condition_obj = url.parse(req.url,true).query;
    // console.log("working");
    var userList = await UserSchemaModel.find(condition_obj);
    // console.log(condition_obj);
   if(userList.length!=0)
   {
    
    res.status(201).json(userList);
   }
   else
   {
     res.status(404).json({"msg":"resource not found"});
   } 
}
export const update =async (req,res)=>{
    var user=await UserSchemaModel.findOne((req.body.condition_obj));
    //  console.log(user);
    if(user)
    {
      var update_user = await UserSchemaModel.updateOne((req.body.condition_obj),{$set:(req.body.content_obj)});
        if(update_user)
        {
            res.status(201).json({"msg":"resource updated successfully"});
        }   
        else
        {
            res.status(500).json({"msg":"resource not update successfully"});    
        }
    }   
    else
    {
        res.status(404).json({"msg":"resource not found"});
    } 
}
export const deleteUser =async (req,res)=>{
    var user=await UserSchemaModel.findOne((req.body.condition_obj));
     //console.log(user);
    if(user)
    {
      var deleted_user = await UserSchemaModel.deleteOne((req.body.condition_obj));
        if(deleted_user)
        {
            res.status(201).json({"msg":"resource deleted successfully"});
        }   
        else
        {
            res.status(500).json({"msg":"resource not deleted successfully"});    
        }
    }   
    else
    {
        res.status(404).json({"msg":"resource not found"});
    } 
}