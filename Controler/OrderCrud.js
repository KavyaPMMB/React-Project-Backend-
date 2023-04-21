const order = require("./OrderSchema");

const createorder=async(req,res)=>{
    const {FirstName,LastName,ProductNumber,Date}=req.body;
    const orderdetails=await order.create({
        FirstName,LastName,ProductNumber,Date
    })
    res.json(orderdetails)
}

const GetOrder=async(req,res)=>{
    const getorder=await order.find()
        res.json(getorder)
}

const UpdateOrder=async(req,res)=>{
    const {FirstName,LastName,ProductNumber,Date}=req.body;
    const _id=req.params.id;
    const updatedetails=await order.findByIdAndUpdate(_id,{FirstName,LastName,ProductNumber,Date})
    res.json(updatedetails)
}

const DeleteOrder=async(req,res)=>{
    const _id=req.params.id;
    const deleteorder=await order.findByIdAndDelete(_id)
    res.json("deleted")
}

const defaultformOrder=async (req,res)=>{
    const _id=req.params.id
    const getform=await order.findById(_id)
    res.json(getform)
}










module.exports={createorder,GetOrder,UpdateOrder,DeleteOrder,defaultformOrder};