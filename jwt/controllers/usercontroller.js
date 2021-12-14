const { Router } = require("express");
const Sequelize = require("sequelize");



async function Register(req,res){

    try {
        const data = await db.user.Create({
            const user: = req.body.user,
            const password: = req.body.password

        })

      res.status(200).json({
        success: true,
        message: "user added successfully",
        data,
      });

        
    }  catch (error) {
        console.log(error);
        return res.status(400).json({
          message: "something went wrong",
        });  
    }




}

module.exports = {Register}