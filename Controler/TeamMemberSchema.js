const mongoose=require('mongoose')

const TeamMemberSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBirth:{type:Date},
    Gender:{type:Boolean},
    Description:{type:String},
    Role:{type:String},
    PhoneNumber:{type:Number},
    ProfilePicture: {
        data: Buffer,
        contentType: String
      }

})
const TeamMember=mongoose.model('TeamMember',TeamMemberSchema)


module.exports=TeamMember;