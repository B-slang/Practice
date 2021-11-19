
const validName =async(req,res) =>{
    console.log(req.body)
    // const name ="ni";
    if(req.body.name.length >3 ){
        next()
    }
    else{
        return res.status(400).json("Name should be more tahn the 3 characters")
    }
}

module.exports =validName;