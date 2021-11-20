const validName =async(req,res, next) =>{
    console.log(req.body)
    const name = req.body.name
    const age = 12;
    const gender = "male"
    const userdetails = {name, age, gender}
    // const name ="ni";
    if(name.length >3 ){

        req.user = userdetails
        // console.log(req.user, "===")
        next()
    }
    else{
        return res.status(400).json("Name should be more tahn the 3 characters")
    }
}

module.exports =validName;