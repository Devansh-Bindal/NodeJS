const itemModel = require('./model');

module.exports.create= async ({
    name,
    quantity,
    isSanitized,
    unit,
    expiryDate,
    category,
    location
}) =>{
    try{
    const response=await itemModel.findOneAndUpdate({name},
        {$set:
        {
            name,
            quantity,
            isSanitized,
            unit,
            expiryDate,
            category,
            location
        }
    }
    )
    return response;
    }
    catch(error){
        return error;
    }
}
module.exports.getAll=async()=>{
    try{
    const response=await itemModel.find();
    return response;
    }
    catch(error)
    {
        return error;
    }
}
module.exports.delete=async({id})=>{
    try{
    const response=await itemModel.deleteMany({
        _id:id
    });
    return response;
    }
    catch(error)
    {
        return error;
    }
}
module.exports.update=async({id},{name,quantity,isSanitized,unit,expiryDate,category,location})=>{
    try{
    const response=await itemModel.findByIdAndUpdate(
        {_id:id},
        {
            name,
            quantity,
            isSanitized,
            unit,
            expiryDate,
            category,
            location
        });
    return response;
    }
    catch(error)
    {
        return error;
    }
}

