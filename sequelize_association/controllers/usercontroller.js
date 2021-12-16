const db = require("../models");
const { getsingleinfo } = require("../services/getsingleinfo");

// const Users = db.users
// const Posts = db.Posts


const createUser = async (req, res) => {
  try {
    const data = await db.users.create({
      name: req.body.name,
      email: req.body.email,
    }); 
    return res.status(200).json({
      success: true,
      message: "added",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "failed",
      error:error.stack
    });
  }
};

const getOneToOne = async (req, res) => {
    // const data  =await db.users.findAll({
    //     // where:{id:2}
    //     include:[{

    //         model:db.Posts,
    //         as:'Postinfo'
    //     }
    //     ]

    // })
    const data = await getsingleinfo(db.users, {id:47})
return res.status(data.status).json({data:data.data,
    message:data.message,
    error:error.stack

})

};



module.exports = {createUser, getOneToOne}
