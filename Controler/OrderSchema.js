const mongoose=require('mongoose')

const OrderSchema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    ProductNumber:{type:Number},
    Date:{type:Date}

})
const order=mongoose.model('order',OrderSchema)
 

module.exports=order;