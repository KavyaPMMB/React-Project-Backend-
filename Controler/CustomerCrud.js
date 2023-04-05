const client = require("./ClientSchema")
const customer = require("./CustomerSchema")

const CreateCustomer=async(req,res)=>{
    const { Name,Email,Address,City,State,PinCode,Country}=req.body
   
    const Customerdetails=await customer.create({
        Name,Email,Address,City,State,PinCode,Country 
    })
    res.json(Customerdetails)
}


const GetCustomer=async (req,res)=>{
     const getcustomer=await customer.find()
     res.json(getcustomer)
 }

 const UpdateCustomer=async (req,res)=>{
    const {Name,Email,Address,City,State,PinCode,Country}=req.body
    const _id=req.params.id
    const updatecustomer=await customer.findByIdAndUpdate(_id,{Name,Email,Address,City,State,PinCode,Country})
    res.json(updatecustomer)
}

const DeleteCustomer=async(req,res)=>
{
    const _id=req.params.id
    const deletecustomer=await customer.findByIdAndDelete(_id)
    res.json("deleted")
}


const ViewCustomer=async (req,res)=>{
    const getid=req.params.id
     const viewcustomer=await customer.find({_id:getid})
     res.json(viewcustomer)
 }

 const defaultformCustomer=async (req,res)=>{
     const _id=req.params.id
     const getform=await customer.findById(_id)
     res.json(getform)
 }



module.exports={CreateCustomer,GetCustomer,UpdateCustomer,DeleteCustomer,ViewCustomer,defaultformCustomer}