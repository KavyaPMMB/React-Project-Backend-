const client = require("./ClientSchema")

const CreateClient=async(req,res)=>{
    const { Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    // const condition = await client.findOne({
    //     $or: [{ UserName }, { Email }],
    //   });
    //   if (condition) {
    //     res.json("User Already exist");
    //     console.log('Client already exist')
    //   } else {
    const Clientdetails=await client.create({
        Name,UserName,Email,SignedStatus,Role,PhoneNumber   
    })
    res.json(Clientdetails)
}


const GetClients=async (req,res)=>{
     const getclients=await client.find()
     res.json(getclients)
 }

 const UpdateClient=async (req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const updateclient=await client.findByIdAndUpdate(_id,{Name,UserName,Email,SignedStatus,Role,PhoneNumber})
    res.json(updateclient)
}

const DeleteClient=async(req,res)=>{
    const _id=req.params.id
    const deleteclient=await client.findByIdAndDelete(_id)
    res.json("deleted")
}


const ViewClient=async (req,res)=>{
    const getid=req.params.id
     const viewclient=await client.find({_id:getid})
     res.json(viewclient)
 }

 const defaultformClient=async (req,res)=>{
     const _id=req.params.id
     const getform=await client.findById(_id)
     res.json(getform)
 }



module.exports={CreateClient,GetClients,UpdateClient,DeleteClient,ViewClient,defaultformClient}