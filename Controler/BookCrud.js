const book = require("./BookSchema")

const CreateBook=async(req,res)=>{
    const {BookName,Author,PublicationsName,Year,Availability}=req.body
    const Bookdetails=await book.create({
        BookName,Author,PublicationsName,Year,Availability
    })
    res.json(Bookdetails)
}

const GetBook=async (req,res)=>{
   // const getid=req.params.id
    const getbook1=await book.find()
    res.json(getbook1)
}

const UpdateBook=async (req,res)=>{
    const {BookName,Author,PublicationsName,Year,Availability}=req.body
    const _id=req.params.id
    const updatebook1=await book.findByIdAndUpdate(_id,{BookName,Author,PublicationsName,Year,Availability})
    res.json(updatebook1)
}

const DeleteBook=async(req,res)=>{
    const _id=req.params.id
    const deletebook1=await book.findByIdAndDelete(_id)
    res.json("deleted")
}

const GetBook1=async (req,res)=>{
    const getid=req.params.id
     const getbook2=await book.find({_id:getid})
     res.json(getbook2)
 }
 const defaultform=async (req,res)=>{
    const {BookName,Author,PublicationsName,Year,Availability}=req.body
    const _id=req.params.id
     const getbook3=await book.findById(_id)
     res.json(getbook3)
 }

 const Search=async (req,res)=>{
    const getbook=req.params.BookName;
    const viewbook=await book.find({BookName:getbook})
    res.json(viewbook)
 }



module.exports={CreateBook,GetBook,UpdateBook,DeleteBook,GetBook1,defaultform,Search}
