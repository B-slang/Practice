const db = require("../models");


const createPost = async (req, res) => {
    try {
      const data = await db.Posts.create({
        Postname: req.body.Postname,
        title: req.body.title,
        content:req.body.content,
        user_id:req.body.user_id
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
  
  const getPostOneToOne = async (req, res) => {
      const data  =await db.Posts.findAll({
        //   where:{id:1}
        include:[
            {
                model:db.users,
                as:'userinfo'
            }
        ]
  
      })
  return res.status(200).json(data)
  
  };
  
  
  module.exports = {createPost, getPostOneToOne}
  