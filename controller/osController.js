const os = require('os')

module.exports.getOsInformation=(req,res) => {
    try{

       const osInformation ={
           hostname: os.hostname(),
           type: os.type(),
           platform: os.platform(),
       }

       if(!osInformation)
       {
          throw new Error("there is no os information available")
       }



        res.status(200).json(osInformation);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports.osCpus=(req,res) => {
    try{

       const osCpus =os.cpus();
       if(!osCpus){
        throw new Error("no Cpus was found!");
       }
        res.status(200).json(osCpus);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports.osCpusById=(req,res) => {
    try{

       const {id} = req.params;
       if(!Number.isInteger(parseInt(id))){
          throw new Error("you must provide a number!")
       }
       const osCpus = os.cpus();
       if(!OsCpus){
          throw new Error("no cpus was found!")
       }
       if(id<0 || id> osCpus.lenght -1 ){
        throw new Error("you must provide a valid id ")
       }
        res.status(200).json(osCpusById);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports.osCpuslenght=(req,res) => {
    try{

       const osCpus =os.cpus();
       if(!osCpus){
        throw new Error("no Cpus was found!");
       }
       const number = osCpus.lenght
        res.status(200).json(number);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
