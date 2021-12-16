const getsingleinfo = async(modelname, condition)=>{
const getdata = await modelname.findOne({
    where:condition
})
if(!getdata){
    return {message:'invalid ID, ',status:400, data:[]}
}

return {message:'successfull data, ',status:200, data:getdata}


}


module.exports = {getsingleinfo}