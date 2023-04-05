const mongoose=require('mongoose')

const connection=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://kavyapmmb1:Kavyap278035@cluster0.i4po8ud.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('DataBase  is Connected');
    }
    catch(err){
        console.log('error :${err}');
        process.exit()
    }
}

module.exports=connection