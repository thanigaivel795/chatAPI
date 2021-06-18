/* eslint-disable no-unused-vars */
const express = require ('express')
const router =  express.Router()
const authController = require('../controllers/authcontroller')

let users=[{userID: 1,username:'testuserone',password:'admin1'},{userID: 2,username:'testusertwo',password:'admin2'},
{userID: 3,username:'testuserthree',password:'admin3'},{userID: 4,username:'testuserfour',password:'admin4'}]


//  router.post('/login', authController.login);
router.post('/login',(req,res,next)=>{
    console.log(req)
   const username = req.body.username
   const password =  req.body.password
   loggedInUser = users.filter((user)=>{
       return user.username === username
   })
   if(loggedInUser.length>0){
       if(loggedInUser[0].password===password){
           res.json({username:loggedInUser[0].username,userID:loggedInUser[0].userID})
       }
        
   }
})



module.exports = router;