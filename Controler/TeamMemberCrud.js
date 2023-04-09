const { UpdateBook } = require("./BookCrud");
const TeamMember = require("./TeamMemberSchema");


const CreateTeamMember=async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture}=req.body;
const TeamDetails=await TeamMember.create({
    Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture
})
res.json(TeamDetails);
}


const GetTeam=async(req,res)=>{
    const getTeam=await TeamMember.find()
    res.json(getTeam)
}

const UpdateTeam=async(req,res)=>{
const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture}=req.body;
const _id=req.params.id;
const updateTeam=await TeamMember.findByIdAndUpdate(_id,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture})

res.json(updateTeam)
}


const DeleteTeam=async(req,res)=>{
    const _id=req.params.id;
    const deleteTeam=await TeamMember.findByIdAndDelete(_id)
    res.json("deleted")
}

const ViewTeam=async(req,res)=>{
    const getid=req.params.id;
    const viewTeam=await TeamMember.find({_id:getid})
    res.json(viewTeam)
}

const defaultteamform=async(req,res)=>{
    const _id=req.params.id;
    const defaultview=await TeamMember.findById(_id)
    res.json(defaultview)
}


module.exports={CreateTeamMember,GetTeam,UpdateTeam,DeleteTeam,ViewTeam,defaultteamform};