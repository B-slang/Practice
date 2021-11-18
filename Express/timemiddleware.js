const country = {
    India: ["en-IN", "Asia/Kolkata"],
    Bermuda:["en-BM", "America/Nassau"],
    Pakistan:["en-PK", "Asia/Karachi"],
    Canada: ["en-CA", "America/Toronto"],
    Hungary:["en-HU", "Europe/Budapest"]


}

countriesTime = async(req,res)=>{
try{


    for (const [key,value] of Object.entries(country)) {
        let CountryZoneTime=[]
        let currTime = new Date().toLocaleString(value[0], {timeZone:value[1]})
        console.log(currTime)
        // console.log(key,value);
        CountryZoneTime.push(`Time Zone ${key} is ${currTime}`)
        // console.log(CountryZoneTime)
    }
    // return CountryZoneTime


}catch(error){
console.log(error);
}
}

countriesTime()
 