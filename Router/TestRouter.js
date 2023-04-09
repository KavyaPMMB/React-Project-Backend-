const express=require('express')
const Login = require('../Controler/Login')
const SignUp = require('../Controler/SignUp')
const protect = require('../Middlewares/Token')
const bookcrud=require("../Controler/BookCrud")
const clientcrud=require('../Controler/ClientCrud')
const customercrud=require("../Controler/CustomerCrud")
const TeamCrud=require('../Controler/TeamMemberCrud')


const router=express.Router()
const middlewares=[protect]


router.route('/signup').post(SignUp)
router.route('/login').post(Login)

//Book Routes
router.route('/createbook').post(bookcrud.CreateBook)
router.route('/getbook').get(bookcrud.GetBook)
router.route('/viewbook/:id').get(bookcrud.GetBook1)
router.route('/updatebook/:id').put(bookcrud.UpdateBook)
router.route('/deletebook/:id').delete(bookcrud.DeleteBook)
router.route('/defaultform/:id').post(bookcrud.defaultform)
router.route('/searchbook/:BookName').get(bookcrud.Search)

//Client Routes
router.route('/createclient').post(clientcrud.CreateClient)
router.route('/getclient').get(clientcrud.GetClients)
router.route('/viewclient/:id').get(clientcrud.ViewClient)
router.route('/updateclient/:id').put(clientcrud.UpdateClient)
router.route('/deleteclient/:id').delete(clientcrud.DeleteClient)
router.route('/defaultclientform/:id').post(clientcrud.defaultformClient)

//Customer Routes
router.route("/createcustomer").post(customercrud.CreateCustomer)
router.route("/getcustomer").get(customercrud.GetCustomer)
router.route("/viewcustomer/:id").get(customercrud.ViewCustomer)
router.route("/updatecustomer/:id").put(customercrud.UpdateCustomer)
router.route("/deletecustomer/:id").delete(customercrud.DeleteCustomer)
router.route("/defaultcustomerform/:id").post(customercrud.defaultformCustomer)

//Team Routes
router.route('/createteam').post(TeamCrud.CreateTeamMember)
router.route('/getteam').get(TeamCrud.GetTeam)
router.route('/viewteam/:id').post(TeamCrud.ViewTeam)
router.route('/updateteam/:id').put(TeamCrud.UpdateTeam)
router.route('/deleteteam/:id').delete(TeamCrud.DeleteTeam)
router.route('/default/:id').post(TeamCrud.defaultteamform)







module.exports=router