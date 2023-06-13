const mainModel=require('../Models/mainModel');
const path = require('path');

exports.getAllAppointment=async(req, res, next)=>{
    try{
        const data=await mainModel.findAll();
        res.status(201).json({allUserData:data});
    }
    catch(err){
        res.status(500).json({error:err});
    }   
};

exports.postAddAppointment=async(req, res, next)=>{
    try{
        const phoneNo=req.body.PhNum;
        const name=req.body.name;
        const email=req.body.email;
        const data= await mainModel.create({Name:name,PhoneNumber:phoneNo,Email:email})
        res.status(201).json({newUserDetail:data});
    }
    catch(err){
        res.status(500).json({error:err});
    }
    
}
 
exports.postDeleteAppointment=async(req,res,next)=>{
    try{
        const uId=req.params.id;
        await mainModel.destroy({where:{id:uId}});
        res.sendStatus(200);    
    }
    catch(err){
        res.status(500).json({error:err});
    }
};
