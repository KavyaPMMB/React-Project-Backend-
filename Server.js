const express=require("express")
const dotenv=require('dotenv')
const cors=require('cors')
const connection = require("./Config/Mongoose")
const router = require("./Router/TestRouter")
connection()
const app=express()

app.use(cors())
app.use(express.json())
app.use('/',router)

app.get('/',(req,res)=>{
    res.send('Running')
})
dotenv.config()



const port=process.env.port || 4000
app.listen(port,console.log(`Server is Running on ${port}`))